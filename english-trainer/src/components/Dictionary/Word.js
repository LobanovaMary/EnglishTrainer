import React from 'react';
import classes from './Word.module.css';

const Word = (props) => {
  return (
    <div className={classes.wrapper}>
      <p>{props.word}</p>
      <p>{`[ ${props.transcription} ]`}</p>
    </div>
  );
};
export default Word;
