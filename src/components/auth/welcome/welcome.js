import React from 'react';
import PropTypes from 'prop-types';
import styles from './welcome.module.scss';

const welcome = () => (
  <div className={styles.welcome} data-testid="welcome">
    welcome Component
  </div>
);

welcome.propTypes = {};

welcome.defaultProps = {};

export default welcome;
