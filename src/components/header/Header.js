import React from 'react';

import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container} >
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  );
};

export default Header;