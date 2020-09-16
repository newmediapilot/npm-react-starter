import React from 'react';
import PropTypes from 'prop-types';
import styles from './navbar.module.scss';

const navbar = () => (
    <nav className={`${styles.navbar} `} data-testid="navbar">
        <div
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <div className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="#">Features</a>
                <a className="p-2 text-dark" href="#">Enterprise</a>
                <a className="p-2 text-dark" href="#">Support</a>
                <a className="p-2 text-dark" href="#">Pricing</a>
            </div>
            <a className="btn btn-outline-primary" href="#">Sign up</a>
        </div>
    </nav>
);

navbar.propTypes = {};

navbar.defaultProps = {};

export default navbar;
