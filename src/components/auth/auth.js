import React from 'react';
import PropTypes from 'prop-types';
import styles from './auth.module.scss';
import navbar from "../../common/navbar/navbar";
import welcome from "./welcome/welcome";

const auth = () => (
    <div className={`main`}>
        <div className={styles.auth} data-testid="auth">
            {navbar()}
        </div>
        <div className={`container`}>
            {welcome()}
        </div>
    </div>
);

auth.propTypes = {};

auth.defaultProps = {};

export default auth;
