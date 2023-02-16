import React from 'react';
import classes from './Select.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { sortList } from '../../../store/ dataSlice';

const Select = (props) => {
  const dispatch = useDispatch();
  const sortValue = useSelector((state) => state.dictionary.filter);

  const sotrItems = (value) => {
    dispatch(sortList(value));
  };

  const selecteSortHandler = (value) => {
    sotrItems(value);
  };

  return (
    <select
      defaultValue={sortValue}
      className={classes.select}
      onChange={(e) => {
        selecteSortHandler(e.target.value);
      }}
    >
      <option value='new'>Сначала новые</option>
      <option value='old'>Сначала старые</option>
    </select>
  );
};

export default Select;
