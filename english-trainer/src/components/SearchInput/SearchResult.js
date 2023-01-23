import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/ dataSlice';

import classes from './SearchResult.module.css';

const SearchResult = (props) => {
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    props.onClean();
    const item = props.data[event.target.getAttribute('data-id')];
    dispatch(addItem(item));
  };

  const renderSearchList = () => {
    return (
      <ul>
        {props.data.map((item, index) => {
          return (
            <li
              className={classes.list__item}
              key={item.id}
              data-id={`${index}`}
              onClick={clickHandler}
            >
              {item.translation}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={props.isVisible ? classes.result : classes.hidden}>
      {props.children}
      {props.resultError ? (
        <p>{props.resultError}</p>
      ) : (
        !!props.data.length && renderSearchList()
      )}
    </div>
  );
};
export default SearchResult;
