import React from 'react';
import classes from './DictionaryTitle.module.css';

const DictionaryTitle = ({ title }) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}> {title} </h2>
    </div>
  );
};

export default DictionaryTitle;
