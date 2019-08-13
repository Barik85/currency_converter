import {
  SWAP_CURRENCY, SET_BASE_CURRENCY,
  SET_QUOTE_CURRENCY, CHANGE_CUR_AMOUNT,
  GET_INITIAL_CONVERSION,
} from '../redux/actionTypes';

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
});

export const setBaseCurrency = cur => ({
  type: SET_BASE_CURRENCY,
  payload: cur,
});

export const setQuoteCurrency = cur => ({
  type: SET_QUOTE_CURRENCY,
  payload: cur,
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CUR_AMOUNT,
  payload: parseFloat(amount),
});

export const getInitialConversion = () => ({
  type: GET_INITIAL_CONVERSION,
});
