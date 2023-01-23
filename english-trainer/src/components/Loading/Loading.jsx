import React from 'react';
import classes from './Loading.module.css';

const Loading = (props) => {
  return (
    <div className={classes.spinner}>
      <span></span>
    </div>
  );
};

export default Loading;
