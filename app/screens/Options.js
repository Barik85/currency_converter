import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StatusBar,
  Platform,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import { AletrContext } from '../components/Alert/AlertProvider';

const ICON_SIZE = 23;
const ICON_COLOR = '#868686';
const PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      push: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
    alertWithType: PropTypes.func.isRequired,
  }

  handleThemePress = () => {
    const { navigation } = this.props;
    navigation.navigate('Themes');
  }

  handleSitePress = () => {
    const { alertWithType } = this.props;

    Linking.openURL('http://fixer.io')
      .catch(() => alertWithType('error', 'Sorry', 'Fixer.io can not be open.'));
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="dark-content" />
        <ListItem
          text="Theme"
          onPress={this.handleThemePress}
          customIcon={
            <Ionicons name={`${PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
        <ListItem
          text="fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons name={`${PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
      </ScrollView>
    );
  }
}

export default function connectedOptions(props) {
  return (
    <AletrContext.Consumer>
      {context => <Options {...props} {...context} />}
    </AletrContext.Consumer>
  );
}
