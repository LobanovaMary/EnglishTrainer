import React from 'react';
import classes from './Wrapper.module.css';

const Wrapper = (props) => {
  const contClass = props.class ? classes[props.class] : '';
  return <div className={`${classes.wrapper} ${contClass}`}>{props.children}</div>;
};
export default Wrapper;
