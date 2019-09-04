import axios from 'axios';

export const requestHistoricalRates = (date, base) => (
  base
    ? axios.get(`https://api.ratesapi.io/api/${date}?base=${base}`)
    : axios.get(`https://api.ratesapi.io/api/${date}`)
);


export const requestRates = base => (
  base
    ? axios.get(`https://api.ratesapi.io/api/latest?base=${base}ii`)
    : axios.get('https://api.ratesapi.io/api/latest')
);
