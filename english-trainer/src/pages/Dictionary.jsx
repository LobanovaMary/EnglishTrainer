import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import DictionaryItems from '../components/Dictionary/DictionaryItems';
import DictionaryHeader from '../components/Dictionary/DictionaryHeader';
import { useSelector } from 'react-redux';

import DictionaryTitle from '../components/Dictionary/DictionaryTitle';

const Dictionary = (props) => {
  const data = useSelector((state) => state.dictionary.data);

  return (
    <Wrapper>
      <DictionaryHeader />
      {data.length === 0 ? (
        <DictionaryTitle title='Список пуст. Добавьте слово' />
      ) : (
        <DictionaryItems />
      )}
    </Wrapper>
  );
};
export default Dictionary;
