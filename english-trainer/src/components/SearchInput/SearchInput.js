import React from 'react';
import Button from '../UI/Button';
import classes from './SearchInput.module.css';

const SearchInput = props => {
  return (
    <div className={classes.input__container}>
      <input className={classes.input} placeholder={'Введите слово'} />
      <Button text={'Найти'} />
    </div>
  );
};
export default SearchInput;
