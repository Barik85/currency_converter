import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const enhancer = applyMiddleware(logger);
const store = createStore(rootReducer, enhancer);

export default store;


// Store structure
// {
//   themes: {
//     primaryColor: String',
//   },
//   currencies: {
//     baseCurrency: String,
//     quoteCurrency: String,
//     amount: Number,
//     conversions: {
//       [CURRENCY_STRING]: {
//         isFetching: Boolean,
//         date: String, // from api
//         base: String, // from api
//         rates: { // from api
//           [CURRENCY_STRING]: Number,
//           ...
//         },
//       }
//     }
//   }
// }

// Exemple store
// {
//   "themes": {
//     primaryColor: '#4F6D7A',
//   },
//   "currencies": {
//     "baseCurrency": "USD",
//     "quoteCurrency": "GBP",
//     "amount": 100,
//     "conversions": {
//       "USD": {
//         "isFetching": false,
//         "base": "USD",
//         "date": "2017-05-31",
//         "rates": {
//           "AUD": 1.3416,
//           "BGN": 1.743,
//           "BRL": 3.2515,
//           "CAD": 1.3464,
//           "CHF": 0.97104,
//           "CNY": 6.813,
//           "CZK": 23.547,
//           "DKK": 6.6302,
//           "GBP": 0.77858,
//           "HKD": 7.7908,
//           "HRK": 6.6068,
//           "HUF": 273.77,
//           "IDR": 13308,
//           "ILS": 3.5431,
//           "INR": 64.463,
//           "JPY": 110.86,
//           "KRW": 1118.4,
//           "MXN": 18.765,
//           "MYR": 4.281,
//           "NOK": 8.4117,
//           "NZD": 1.4071,
//           "PHP": 49.77,
//           "PLN": 3.7173,
//           "RON": 4.0687,
//           "RUB": 56.774,
//           "SEK": 8.6942,
//           "SGD": 1.3829,
//           "THB": 34.07,
//           "TRY": 3.5366,
//           "ZAR": 13.133,
//           "EUR": 0.89119
//         }
//       }
//     }
//   }
// }
