import { SWAP_CURRENCY, SET_CURRENT_CURRENCY, CHANGE_CUR_AMOUNT } from '../redux/actionTypes';

const currencyReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_CUR_AMOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default currencyReducer;
