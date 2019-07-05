import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import AlertProvider from './components/Alert/AlertProvider';
import store from './redux/store';

EStyleSheet.build({
  $primaryBlue: '#1c3334',
  $primaryOrange: '#e07e00',
  $primaryGreen: '#83c535',
  $primaryPurple: '#9a4ca2',
  $grey: '#e2e2e2',
  $text_grey: '#797979',
  $light_grey: '#f0f0f0',
  // $outline: 1,
  $dark_grey: '#343434',
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator />
    </AlertProvider>
  </Provider>
);
