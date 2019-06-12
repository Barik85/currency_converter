import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
  $underlayColor: '$grey',
  item_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  item_text: {
    fontSize: 16,
    color: '$dark_grey',
  },
  separator: {
    marginLeft: 20,
    backgroundColor: '$grey',
    height: StyleSheet.hairlineWidth,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  iconVisible: {
    backgroundColor: '$primaryBlue',
  },
  checkmark: {
    width: 15,
    height: 15,
  },
});

export default styles;
