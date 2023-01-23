import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import DictionaryItems from '../components/Dictionary/DictionaryItems';
import DictionaryHeader from '../components/Dictionary/DictionaryHeader';
import { useSelector } from 'react-redux';
const Dictionary = (props) => {
  const data = useSelector((state) => state.dictionary.data);

  return (
    <Wrapper>
      <DictionaryHeader />
      {data.length === 0 ? (
        <h2>Список пуст. Добавте слово в словарь</h2>
      ) : (
        <DictionaryItems />
      )}
    </Wrapper>
  );
};
export default Dictionary;
