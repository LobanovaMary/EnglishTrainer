import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import DictionaryItems from '../components/Dictionary/DictionaryItems';
import DictionaryHeader from '../components/Dictionary/DictionaryHeader';
import { useSelector } from 'react-redux';

import DictionaryTitle from '../components/Dictionary/DictionaryTitle';
import { useState } from 'react';

const Dictionary = (props) => {
  const [selectorSort, setSelectorSort] = useState('newWord');

  const data = useSelector((state) => state.dictionary.data);

  const selectFilter = (value) => {
    setSelectorSort(value);
    console.log(value);
  };
  return (
    <Wrapper>
      <DictionaryHeader
        filterSelect={selectFilter}
        valueSelect={selectorSort}
      />
      {data.length === 0 ? (
        <DictionaryTitle title='Список пуст. Добавьте слово' />
      ) : (
        <DictionaryItems data={data} />
      )}
    </Wrapper>
  );
};
export default Dictionary;
