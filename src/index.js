import {h, render} from 'preact';
import './style/style.scss';

import BibleStudy from './show/BibleStudy';
import CallbagResearch from './show/CallbagResearch';
import ReadBible from './show/ReadBible';
import Quest from './show/Quest';

render( (
  <main>
    <Quest />
    {/* <ReadBible /> */}
    {/* <BibleStudy /> */}
  </main>
), document.body );