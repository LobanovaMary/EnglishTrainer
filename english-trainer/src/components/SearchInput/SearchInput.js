import React from 'react';
import classes from './SearchInput.module.css';

const SearchInput = props => {
  return <input className={classes.input} placeholder={'Введите слово'} />;
};
export default SearchInput;
