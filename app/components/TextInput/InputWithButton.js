import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const { buttonText, onPress, editable = true } = props;
  const containerStyles = [styles.container];

  if (editable === false) {
    containerStyles.push(styles.disable);
  }

  const underlayColor = color(styles.$white).darken(styles.$modifier);

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        style={styles.button_container}
        onPress={onPress}
        underlayColor={underlayColor}
      >
        <Text style={styles.button_text}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.text_input}
        {...props}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  editable: PropTypes.bool,
};

export default InputWithButton;
