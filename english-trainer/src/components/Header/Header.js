import React from 'react';
import classes from './Header.module.css';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import SearchInput from '../SearchInput/SearchInput';

const Header = props => {
  return (
    <header className={classes.header}>
      <Container class={'header__container'}>
        <Logo />
        <SearchInput />
        <Navigation />
      </Container>
    </header>
  );
};
export default Header;
