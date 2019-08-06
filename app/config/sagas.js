import { takeEvery } from 'redux-saga/effects';
import { SWAP_CURRENCY, SET_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../redux/actionTypes';
import { fetchConversion } from '../api';

export default function* roorSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchConversion);
}
