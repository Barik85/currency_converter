import React, {
  Component, createRef, Children,
  createContext,
} from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DropdownAletr from 'react-native-dropdownalert';

export const AletrContext = createContext({
  alert: () => null,
  alrtWithType: () => null,
});

export default class AlertProvider extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  constructor() {
    super();

    this.dropdownRef = createRef();
  }

  render() {
    const { children } = this.props;

    return (
      <AletrContext.Provider
        value={{
          alert: (...args) => this.dropdownRef.current.alert(...args),
          alertWithType: (...args) => this.dropdownRef.current.alertWithType(...args),
        }}
      >
        <View style={{ flex: 1 }}>
          {Children.only(children)}
          <DropdownAletr ref={this.dropdownRef} />
        </View>
      </AletrContext.Provider>
    );
  }
}
