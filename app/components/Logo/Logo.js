import React, { Component } from 'react';
import {
  View,
  Text,
  Keyboard,
  Animated,
  Platform,
} from 'react-native';
import exchange from '../../../img/exchange.png';

import styles from './styles';

const DURATION = 300;

export default class Logo extends Component {
  constructor() {
    super();

    this.imgWidth = new Animated.Value(styles.$largeSize);
  }

  componentDidMount() {
    const method = Platform.OS === 'ios' ? 'Will' : 'Did';
    this.keyboardShowListener = Keyboard.addListener(`keyboard${method}Show`, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(`keyboard${method}Hide`, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.timing(this.imgWidth, {
      toValue: styles.$smallSize,
      duration: DURATION,
    }).start();
  }

  keyboardHide = () => {
    Animated.timing(this.imgWidth, {
      toValue: styles.$largeSize,
      duration: DURATION,
    }).start();
  }

  render() {
    const imgStyle = [
      styles.logoImage,
      { width: this.imgWidth, height: this.imgWidth },
    ];

    return (
      <View style={styles.container}>
        <Animated.Image
          source={exchange}
          style={imgStyle}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Currency converter
        </Text>
      </View>
    );
  }
}
