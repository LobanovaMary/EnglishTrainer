import React from 'react';
import InputFindField from '../UI/InputFindField';
import Select from '../UI/Select/Select';
import classes from './DictionaryHeader.module.css';

const DictionaryHeader = (props) => {
  const filterSelect = (value) => {
    props.filterSelect(value);
  };
  return (
    <div className={classes.wrapper}>
      <InputFindField />
      <Select filterSelect={filterSelect} value={props.valueSelect} />
    </div>
  );
};

export default DictionaryHeader;
