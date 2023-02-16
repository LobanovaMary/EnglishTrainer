import React, { useState } from 'react';
import classes from './InputFindField.module.css';

const InputFindField = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const changeSearchQuery = (e) => {
    setSearchQuery(e.target.value);
    props.searchValue(e.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <input
        type='text'
        placeholder='Найти'
        value={searchQuery}
        onChange={changeSearchQuery}
      />
    </div>
  );
};

export default InputFindField;
