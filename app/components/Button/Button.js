import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import styles from './styles';

const Button = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        source={require('../../../img/shuffle.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  text: 'Press',
  onPress: () => {},
};

export default Button;
