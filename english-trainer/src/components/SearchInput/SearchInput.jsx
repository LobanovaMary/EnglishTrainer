import React, { useState } from 'react';
import Button from '../UI/Button';
import SearchResult from './SearchResult';
import useHttp from '../../hooks/use-http';
import Loading from '../Loading/Loading';

import classes from './SearchInput.module.css';

const SearchInput = (props) => {
  const [searchWord, setSearchWord] = useState('');
  const [data, setData] = useState([]);
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  const [resultError, setResultError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const searchWordChangeHandler = (event) => {
    setSearchWord(event.target.value);
  };

  const createSearchResult = (taskText) => {
    if (taskText[0].text === searchWord.toLowerCase()) {
      const dateArr = [];
      taskText[0].meanings.forEach((el) => {
        if (!dateArr.find((obj) => obj.translation === el.translation.text))
          dateArr.push({
            id: el.id,
            word: searchWord,
            imageUrl: el.imageUrl,
            soundUrl: el.soundUrl,
            transcription: el.transcription,
            translation: el.translation.text,
            time: new Date().toLocaleString().split(','),
            status: 'Не изучено',
          });
      });
      setData(dateArr);
      setResultError(null);
    } else {
      setResultError('Ничего не найдено');
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsVisible(false);
    setResultError(null);

    if (searchWord) {
      setData([]);
      setIsVisible(true);
      sendTaskRequest(
        {
          url: `https://dictionary.skyeng.ru/api/public/v1/words/search?search=${searchWord}`,
        },
        createSearchResult.bind(null)
      );
    }
  };

  const cleanData = () => {
    console.log('blur epta');
    setData([]);
    setIsVisible(false);
    setSearchWord('');
  };

  return (
    <form className={classes.input__container} onSubmit={submitHandler}>
      <input
        className={classes.input}
        placeholder={'Введите слово'}
        onChange={searchWordChangeHandler}
        value={searchWord}
      />

      <SearchResult
        data={data}
        resultError={resultError}
        isVisible={isVisible}
        isLoading={isLoading}
        onClean={cleanData}
      >
        {error && <p>{error}</p>}
        {isLoading && <Loading />}
      </SearchResult>

      <Button text={'Найти'} />
    </form>
  );
};
export default SearchInput;
