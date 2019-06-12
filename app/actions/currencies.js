import { SWAP_CURRENCY, SET_CURRENT_CURRENCY, CHANGE_CUR_AMOUNT } from '../redux/actionTypes';

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
});

export const setCurrentCurrency = cur => ({
  type: SET_CURRENT_CURRENCY,
  payload: cur,
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CUR_AMOUNT,
  payload: amount,
});
