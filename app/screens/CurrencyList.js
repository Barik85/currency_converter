import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, View, StatusBar,
} from 'react-native';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';

const dataCurrensy = require('../../data/currency_list');

const currencyCodes = Object.keys(dataCurrensy);
const TEMP_CURRENT_CURRENCY = 'CAD';

export default class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }),
  }

  handleItemPress = () => {
    console.log('Row press');
    const { navigation } = this.props;
    if (navigation) navigation.goBack(null);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" translucent={false} backgroundColor="#f00" />
        <FlatList
          data={currencyCodes}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handleItemPress}
              visible
              checkmark
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}
