import {
  takeEvery, select, call,
  put,
} from 'redux-saga/effects';
import {
  SWAP_CURRENCY, SET_BASE_CURRENCY, GET_INITIAL_CONVERSION,
  CONVERSION_RESULT, CONVERSION_ERROR,
} from '../redux/actionTypes';
import { requestRates } from '../api';

function* fetchConversion(action) {
  try {
    let base = action.payload;
    if (!base) {
      base = yield select(state => state.currencies && state.currencies.baseCurrency);
    }

    const res = yield call(requestRates, base);

    const result = yield res && res.data;

    if (result && result.error) {
      yield put({ type: CONVERSION_ERROR, payload: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, payload: result });
    }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, payload: error });
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchConversion);
  yield takeEvery(SWAP_CURRENCY, fetchConversion);
  yield takeEvery(SET_BASE_CURRENCY, fetchConversion);
}
