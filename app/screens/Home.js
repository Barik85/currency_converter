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
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCE = 'UAH';
const TEMP_BASE_PRICE = '29';
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
  }

  handlePressBase = () => {
    const { navigation } = this.props;

    navigation.navigate('CurrencyList', { title: 'Base currency' });
  }

  handlePressQoute = () => {
    const { navigation } = this.props;

    navigation.navigate('CurrencyList', { title: 'Quote currency' });
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
    return (
      <Container>
        <StatusBar
          translucent
          barStyle="dark-content"
        />
        <Header onPress={this.handleOptionsPress} />
        <Logo />
        <KeyboardAvoidingView behavior="padding">
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBase}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCE}
            onPress={this.handlePressQoute}
            editable={false}
            defaultValue={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCE}
            conversionRate={TEMP_CONVERSION_RATE}
            date={TEMP_DATE}
          />
          <Button text="Reverce currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default connect()(Home);
