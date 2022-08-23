import React from 'react';
import classes from './Header.module.css';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Controls from '../Controls/Controls';

import SearchInput from '../SearchInput/SearchInput';

const Header = props => {
  return (
    <header className={classes.header}>
      <Container class={'header__container'}>
        <Logo />
        <SearchInput />
        <Controls />
      </Container>
    </header>
  );
};
export default Header;
