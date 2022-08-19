import React from 'react';
import classes from './Header.module.css';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Button from '../UI/Button';
import SearchInput from '../SearchInput/SearchInput';

const Header = props => {
  return (
    <header className={classes.header}>
      <Container class={'header__container'}>
        <Logo />
        <SearchInput />
        <Button text={'Словарь'} />
        <Button text={'Тренировка'} />
      </Container>
    </header>
  );
};
export default Header;
