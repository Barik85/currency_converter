import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FlatList, View, StatusBar,
} from 'react-native';

import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import { setBaseCurrency, setQuoteCurrency } from '../actions/currencies';


export class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }),
    dispatch: PropTypes.func.isRequired,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    themeColor: PropTypes.string.isRequired,
    currencyCodes: PropTypes.arrayOf(PropTypes.string),
  }

  handleItemPress = (currency) => {
    const { navigation, dispatch } = this.props;

    if (navigation) {
      const { type } = navigation.state && navigation.state.params;

      if (type === 'base') {
        dispatch(setBaseCurrency(currency));
      } else if (type === 'quote') {
        dispatch(setQuoteCurrency(currency));
      }
      navigation.goBack(null);
    }
  }

  render() {
    const {
      navigation,
      baseCurrency,
      quoteCurrency,
      themeColor,
      currencyCodes,
    } = this.props;
    const { type } = navigation.state && navigation.state.params;

    let comparrisson;
    if (type === 'base') comparrisson = baseCurrency;
    if (type === 'quote') comparrisson = quoteCurrency;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" translucent={false} backgroundColor="#f00" />
        <FlatList
          data={currencyCodes}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparrisson}
              onPress={() => this.handleItemPress(item)}
              visible
              checkmark
              iconBackground={themeColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mSTP = (state) => {
  const firstCurrency = state.currencies.conversions[Object.keys(state.currencies.conversions)[0]];
  const currencyCodes = (firstCurrency && firstCurrency.rates)
    ? [firstCurrency.base, ...Object.keys(firstCurrency.rates)]
    : [];

  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    themeColor: state.themes.primaryColor,
    currencyCodes,
  };
};

export default connect(mSTP)(CurrencyList);
