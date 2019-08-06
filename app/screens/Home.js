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

const TEMP_QUOTE_PRICE = '28.1';
const TEMP_CONVERSION_RATE = 28.1;
const TEMP_DATE = new Date();

export class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      push: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
    baseCurrency: PropTypes.string.isRequired,
    quoteCurrency: PropTypes.string.isRequired,
    // themeColor: PropTypes.string,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInitialConversion());
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
    } = this.props;

    return (
      <Container>
        <StatusBar
          // translucent
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
            defaultValue={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={TEMP_CONVERSION_RATE}
            date={TEMP_DATE}
          />
          <Button text="Reverce currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mSTP = state => ({
  amount: state.currencies.amount,
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  themeColor: state.themes.primaryColor,
});

export default connect(mSTP)(Home);
