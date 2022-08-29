import React from 'react';
import classes from './Navigation.module.css';

const Controls = (props) => {
  return (
    <div className={classes.controls__container}>
      <a href="#" className={classes.link}>
        Словарь
      </a>
      <a href="#" className={classes.link}>
        Тренировка
      </a>
    </div>
  );
};
export default Controls;
