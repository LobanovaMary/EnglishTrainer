import React from 'react';
import { useSelector } from 'react-redux';
import SoundButton from '../UI/SoundIcon';
import Word from './Word';
import WordImg from './WordImg';
import RemoveIcon from '../UI/RemoveIcon';
import classes from './DictionaryItems.module.css';
import Status from './Status';

const DictionaryItems = (props) => {
  const data = useSelector((state) => state.dictionary.data);
  return (
    <React.Fragment>
      {data.map((el) => (
        <div key={el.id} className={classes.item__wrapper} data-id={el.id}>
          <SoundButton src={el.soundUrl} />
          <Word word={el.word} transcription={el.transcription} />
          <p className={classes.translation}>{el.translation}</p>
          <WordImg src={el.imageUrl} alt={el.word} />
          <Status status={el.status} />
          <RemoveIcon />
        </div>
      ))}
    </React.Fragment>
  );
};
export default DictionaryItems;
