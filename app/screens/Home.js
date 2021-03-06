import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { Button } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';
import { AletrContext } from '../components/Alert/AlertProvider';

const TEMP_CONVERSION_RATE = 28.1;

export class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      push: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    amount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    baseCurrency: PropTypes.string.isRequired,
    quoteCurrency: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    conversionRate: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    currencyError: PropTypes.object,
    alertWithType: PropTypes.func.isRequired,
  }

  static defaultProps = {
    currencyError: null,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInitialConversion());
  }

  componentDidUpdate(prevProps) {
    const prevError = prevProps.currencyError;
    const { currencyError, alertWithType } = this.props;
    if (currencyError && currencyError !== prevError) {
      alertWithType('error', 'Error', currencyError);
    }
  }

  handlePressBase = () => {
    const { navigation } = this.props;

    navigation.navigate('CurrencyList', {
      title: 'Base currency',
      type: 'base',
    });
  }

  handlePressQoute = () => {
    const { navigation } = this.props;

    navigation.navigate('CurrencyList', {
      title: 'Quote currency',
      type: 'quote',
    });
  }

  handleChangeText = (text) => {
    const { dispatch } = this.props;

    dispatch(changeCurrencyAmount(text));
  }

  handleSwapCurrency = () => {
    const { dispatch } = this.props;

    dispatch(swapCurrency());
  }

  handleOptionsPress = () => {
    const { navigation } = this.props;

    navigation.navigate('Options');
  }

  render() {
    const {
      amount, baseCurrency, quoteCurrency,
      isFetching, conversionRate, date,
    } = this.props;

    let quotePrice = '...';

    if (!isFetching) {
      quotePrice = (amount * conversionRate).toFixed(2);
    }

    return (
      <Container>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="#000"
        />
        <Header onPress={this.handleOptionsPress} />
        <Logo />
        <KeyboardAvoidingView behavior="padding">
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBase}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQoute}
            editable={false}
            value={quotePrice}
          />
          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={TEMP_CONVERSION_RATE}
            date={new Date(date)}
          />
          <Button text="Reverce currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mSTP = (state) => {
  const {
    baseCurrency, quoteCurrency, amount, error,
  } = state.currencies;

  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const date = conversionSelector.date || '...';

  return {
    amount,
    baseCurrency,
    quoteCurrency,
    themeColor: state.themes.primaryColor,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: !!conversionSelector.isFetching,
    date,
    currencyError: error,
  };
};

export const HomeWithAlert = props => (
  <AletrContext.Consumer>
    {context => <Home {...props} {...context} />}
  </AletrContext.Consumer>
);

export default connect(mSTP)(HomeWithAlert);
