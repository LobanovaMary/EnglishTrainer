import React from 'react';
import classes from './WordImg.module.css';

const WordImg = (props) => {
  return (
    <div className={classes.img__container}>
      <img alt={props.alt} src={props.src} className={classes.img} />
    </div>
  );
};
export default WordImg;
