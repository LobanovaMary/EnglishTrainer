import React, { useState } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import DictionaryItems from '../components/Dictionary/DictionaryItems';
import DictionaryHeader from '../components/Dictionary/DictionaryHeader';
import { useSelector } from 'react-redux';

import DictionaryTitle from '../components/Dictionary/DictionaryTitle';

const Dictionary = (props) => {
  const data = useSelector((state) => state.dictionary.data);

  const [filterData, setFilterData] = useState('');

  const searchValue = (query) => {
    if (!query) return setFilterData(null);

    const filtered = data.filter((item) => {
      return (
        item.translation.startsWith(query.toLowerCase()) ||
        item.word.startsWith(query.toLowerCase())
      );
    });
    setFilterData(filtered);
  };

  return (
    <Wrapper>
      <DictionaryHeader searchValue={searchValue} />
      {data.length === 0 ? (
        <DictionaryTitle title='Список пуст. Добавьте слово' />
      ) : (
        <DictionaryItems data={filterData || data} />
      )}
    </Wrapper>
  );
};
export default Dictionary;
