import React from 'react';
import InputFindField from '../UI/InputFindField';
import classes from './DictionaryHeader.module.css';

const DictionaryHeader = (props) => {
  return (
    <div className={classes.wrapper}>
      <InputFindField />
      <select name='filter'>
        <option>Недавно добавленные</option>
        <option>Сначало старые</option>
        <option>Слова на изучении</option>
        <option>Выученые слова</option>
      </select>
    </div>
  );
};

export default DictionaryHeader;
