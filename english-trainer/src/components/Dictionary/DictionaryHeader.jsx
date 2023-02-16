import React from 'react';
import InputFindField from '../UI/InputFindField';
import Select from '../UI/Select/Select';
import classes from './DictionaryHeader.module.css';

const DictionaryHeader = (props) => {
  return (
    <div className={classes.wrapper}>
      <InputFindField searchValue={props.searchValue} />
      <Select />
    </div>
  );
};

export default DictionaryHeader;
