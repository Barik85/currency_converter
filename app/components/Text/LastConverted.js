import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({
  base, quote, conversionRate, date,
}) => (
  <Text style={styles.smallText}>
    {/* eslint-disable-next-line */}
    1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
  date: PropTypes.object,
};

export default LastConverted;
