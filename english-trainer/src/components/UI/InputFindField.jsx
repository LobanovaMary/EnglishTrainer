import React from 'react';
import classes from './InputFindField.module.css';

const InputFindField = (props) => {
  return (
    <div className={classes.wrapper}>
      <input type='text' placeholder='Найти' />
    </div>
  );
};

export default InputFindField;
