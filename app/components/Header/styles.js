import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    '@media ios': {
      paddingTop: 20,
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  gear: {
    height: 15,
    width: 15,
  },
});

export default styles;
