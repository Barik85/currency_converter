import {
  SWAP_CURRENCY, SET_BASE_CURRENCY, CHANGE_CUR_AMOUNT,
  SET_QUOTE_CURRENCY,
} from '../redux/actionTypes';

const INITIAL_STATE = {
  baseCurrency: 'EUR',
  quoteCurrency: 'USD',
  amount: 1,
  conversions: {},
};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (state.conversions[action.payload]) {
    conversion = state.conversions[action.payload];
  }

  return {
    ...state.conversions,
    [action.payload]: conversion,
  };
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CUR_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };

    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };

    case SET_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.payload,
        conversions: setConversions(state, action),
      };

    case SET_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.payload,
        conversions: setConversions(state, action),
      };

    default:
      return state;
  }
};

export default currencyReducer;
