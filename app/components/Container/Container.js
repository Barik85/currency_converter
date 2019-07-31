import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

const Container = ({ children, primaryColor }) => (
  <View style={[styles.container, { backgroundColor: primaryColor }]}>
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
  primaryColor: PropTypes.string,
};

const mSTP = state => ({
  primaryColor: state.themes.primaryColor,
});

export default connect(mSTP)(Container);
