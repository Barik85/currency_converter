import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = EStyleSheet.create({
  $white: '#fff',
  $modifier: 0.1,

  container: {
    backgroundColor: '#fff',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },

  button_container: {
    height: INPUT_HEIGHT,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },

  button_text: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },

  border: {
    width: StyleSheet.hairlineWidth,
    height: INPUT_HEIGHT,
    backgroundColor: '$grey',
  },

  text_input: {
    height: INPUT_HEIGHT,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 18,
    color: '$text_grey',
  },

  disable: {
    backgroundColor: '$light_grey',
  },
});

export default styles;
