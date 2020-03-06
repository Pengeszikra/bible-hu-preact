import { h } from 'preact';
import { useEffect, useState} from 'preact/hooks';
import { pipe, take, fromIter, forEach, map, merges, merge } from 'callbag-basics';
import interval from 'callbag-interval';
import takeWhile from 'callbag-take-while';
import { debounce } from 'callbag-debounce';
import fromEvent from 'callbag-from-event';
import mergeWith from 'callbag-merge-with';
import fromFunction from 'callbag-from-function';
import timer from 'callbag-timer';

const initial = {
  hero: { hp: 100, view: '🧔', position: 0 },
  boss: { hp: 100, view: '🧟‍♂️' },
  item: { hp: 20, view: '🍎'},
  area: `....🍎...🍎..🧟‍♂️...🍎...🧟‍♂️`,    
}

function * playing ({area, hero}) {
  let situation = [...area];
  situation[hero.position] = hero.view;
  yield situation.join('');
}

export default () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    initial
      |> playing 
      |> fromIter 
      |> forEach(setContent);
  }, []);
  return <pre>{content}</pre>
}