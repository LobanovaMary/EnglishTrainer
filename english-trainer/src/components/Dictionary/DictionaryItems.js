import React from 'react';
import {useSelector} from 'react-redux';
import SoundButton from '../UI/SoundButtton';
import Word from './Word';
import WordImg from './WordImg';
import RemoveIcon from '../UI/RemoveIcon';
import classes from './DictionaryItems.module.css';

const DictionaryItems = (props) => {
  const data = useSelector((state) => state.dictionary.data);
  return (
    <React.Fragment>
      {data.map((el) => (
        <div key={el.id} className={classes.item__wrapper}>
          <SoundButton src={el.soundUrl} />
          <Word word={el.word} transcription={el.transcription} />
          <p className={classes.translation}>{el.translation}</p>
          <WordImg src={el.imageUrl} alt={el.word} />
          <RemoveIcon />
        </div>
      ))}
    </React.Fragment>
  );
};
export default DictionaryItems;
