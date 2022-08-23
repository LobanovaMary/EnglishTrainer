import React from 'react';
import Button from '../UI/Button';
import classes from './Controls.module.css';

const Controls = props => {
  return (
    <div className={classes.controls__container}>
      <Button text={'Словарь'} />
      <Button text={'Тренировка'} />;
    </div>
  );
};
export default Controls;
