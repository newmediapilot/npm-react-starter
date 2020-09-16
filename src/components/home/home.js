import React from 'react';
import PropTypes from 'prop-types';
import styles from './home.module.scss';
import navbar from "../navbar/navbar";

const home = () => (
    <main className={`${styles.home} `} data-testid="home">
        {navbar()}
    </main>
);

home.propTypes = {};

home.defaultProps = {};

export default home;
