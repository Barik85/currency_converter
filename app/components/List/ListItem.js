import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text, View } from 'react-native';
import Icon from './Icon';
import styles from './styles';


const ListItem = ({
  text, selected,
  onPress,
  checkmark = false,
  visible = false,
  customIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.item_row}>
      <Text style={styles.item_text}>
        {text}
      </Text>
      {selected
        ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} /> : null}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
