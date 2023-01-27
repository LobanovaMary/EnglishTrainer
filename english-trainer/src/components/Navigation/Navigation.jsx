import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Controls = (props) => {
  return (
    <div className={classes.controls__container}>
      <NavLink
        to='/dictionary'
        className={({ isActive }) =>
          isActive ? `${classes.active}` : `${classes.link}`
        }
      >
        Словарь
      </NavLink>
      <NavLink
        to='/train'
        className={({ isActive }) =>
          isActive ? `${classes.active}` : `${classes.link}`
        }
      >
        Тренировка
      </NavLink>
    </div>
  );
};
export default Controls;
