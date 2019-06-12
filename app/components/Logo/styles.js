import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imgWidth = Dimensions.get('window').width / 4;

const styles = EStyleSheet.create({
  $largeSize: imgWidth,
  $smallSize: imgWidth / 2,
  container: {
    alignItems: 'center',
  },
  logoImage: {
    width: '$largeSize',
    height: '$largeSize',
  },
  text: {
    marginTop: 35,
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    color: '#fff',
  },
});

export default styles;
