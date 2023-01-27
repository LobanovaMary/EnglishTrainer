import React from 'react';
import classes from './Select.module.css';

const Select = (props) => {
  return (
    <select
      className={classes.select}
      onChange={(e) => props.filterSelect(e.target.value)}
    >
      <option value='newWord'>Недавно добавленные</option>
      <option value='oldWord'>Сначала старые</option>
      <option value='learnWord'>Слова на изучении</option>
      <option value='doneWord'>Выученые слова</option>
    </select>
  );
};

export default Select;
