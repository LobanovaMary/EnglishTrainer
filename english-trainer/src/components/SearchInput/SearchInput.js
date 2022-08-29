import React, {useState} from 'react';
import Button from '../UI/Button';
import SearchResult from './SearchResult';
import useHttp from '../../hooks/use-http';

import classes from './SearchInput.module.css';

const SearchInput = (props) => {
  const [searchWord, setSearchWord] = useState('');
  const [data, setData] = useState([]);
  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();
  const [resultError, setResultError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const searchWordChangeHandler = (event) => {
    setSearchWord(event.target.value);
  };

  const createSearchResalt = (taskText) => {
    if (taskText[0].text === searchWord.toLowerCase()) {
      const dateArr = taskText[0].meanings.map((el) => {
        return {
          id: el.id,
          imageUrl: el.imageUrl,
          soundUrl: el.soundUrl,
          transcription: el.transcription,
          translation: el.translation.text,
        };
      });
      setData(dateArr);
    } else {
      setResultError('Ничего не найдено');
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsVisible(true);

    if (searchWord) {
      setData([]);
      sendTaskRequest(
        {
          url: `https://dictionary.skyeng.ru/api/public/v1/words/search?search=${searchWord}`,
        },
        createSearchResalt.bind(null)
      );
    }
  };

  const cleanData = () => {
    setData([]);
    setIsVisible(false);
  };

  return (
    <form className={classes.input__container} onSubmit={submitHandler}>
      <input
        className={classes.input}
        placeholder={'Введите слово'}
        onChange={searchWordChangeHandler}
      />
      <SearchResult
        data={data}
        resultError={resultError}
        isVisible={isVisible}
        isLoading={isLoading}
        onClean={cleanData}
      >
        {error && <p>{error}</p>}
        {isLoading && <p>{'Loading...'}</p>}
      </SearchResult>
      <Button text={'Найти'} />
    </form>
  );
};
export default SearchInput;
