import React from 'react';
import classes from './Container.module.css';

const Container = props => {
  const contClass = props.class ? classes[props.class] : '';
  console.log(contClass);
  return <div className={`${classes.container} ${contClass}`}>{props.children}</div>;
};
export default Container;
