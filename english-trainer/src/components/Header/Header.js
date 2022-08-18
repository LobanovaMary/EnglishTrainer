import React from 'react';
import classes from './Header.module.css';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const Header = props => {
  return (
    <header className={classes.header}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
};
export default Header;
