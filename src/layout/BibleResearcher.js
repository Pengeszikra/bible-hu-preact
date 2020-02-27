import { h } from 'preact';
import { useEffect, useLayoutEffect } from 'preact/hooks';
import { divFactory, factory } from 'preact-slash';
import useReducerActions from '../utils/useReducerActions';

import {reducer, initialState, actions} from '../flow/bibleReducer';
import { fromIter, forEach, pipe } from 'callbag-basics';
import { debounce } from 'callbag-debounce';
import { kereses } from '../flow/szentirasApi';

export default () => {
  const {state, askAbout, answerReady } = useReducerActions(reducer, initialState, actions);
  const {answer, search} = state;

  const changeSearchInput = ({target:{value}}) => value |> askAbout;

  useLayoutEffect(() => {
    if (search.length > 3) {
      search |> kereses(json => JSON.stringify(json, null, 2) |> answerReady );
    }    
  }, [search]);
  
  return (
    <pre>{`
    -- Bible Study --

     How speed up javascript development process?
    
    `} 
    <a href="https://szentiras.hu/api" target="_base">szentiras.hu/api</a>
    <br />
    <input type='text' value={search} onInput={changeSearchInput}/><span>{search}</span>
    <p>{answer}</p>
    
    </pre>
  );
}