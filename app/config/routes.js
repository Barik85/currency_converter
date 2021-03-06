import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native';
import HomeScreen from '../screens/Home';
import CurrencyListScreen from '../screens/CurrencyList';
import Options from '../screens/Options';
import ThemesScreen from '../screens/Themes';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null,
      },
    },

    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },

    Themes: {
      screen: ThemesScreen,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyListScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

const Navigator = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    cardStyle: {
      paddingTop: StatusBar.currentHeight,
    },
    headerMode: 'none',
  },
);

export default createAppContainer(Navigator);
