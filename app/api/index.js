import axios from 'axios';

export function* fetchConversion(action) {
  console.log('Fetch conversion', action);
  yield;
}

export const requestRates = base => (
  base
    ? axios.get(`https://api.ratesapi.io/api/latest?base=${base}`)
    : axios.get('https://api.ratesapi.io/api/latest')
);
