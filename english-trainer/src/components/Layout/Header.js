import React from 'react';
import classes from './Header.module.css';
import Wrapper from '../Wrapper/Wrapper';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import SearchInput from '../SearchInput/SearchInput';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Wrapper class={'header__wrapper'}>
        <Logo />
        <SearchInput />
        <Navigation />
      </Wrapper>
    </header>
  );
};
export default Header;
