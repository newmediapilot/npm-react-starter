import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.scss';

const login = () => (
  <div className={styles.login} data-testid="login">
    login Component
  </div>
);

login.propTypes = {};

login.defaultProps = {};

export default login;
