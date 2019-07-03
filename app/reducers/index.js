import { combineReducers } from 'redux';
import currencyReducer from './currencies';
import themeReducer from './themes';

export default combineReducers({
  currencies: currencyReducer,
  themes: themeReducer,
});
