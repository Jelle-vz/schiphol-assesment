import { SearchResult } from './components/SearchResult';
import { FlightInfo } from './components/FlightInfo';

import bgImage from './assets/svg/woman-sitting';

import '../sass/index.scss';

const main = () => `
  <div class="wrapper card">
    <div class="heading">
      <div><h1>Welcome traveler</h1></div>
      <div>${bgImage}</div>
    </div>
    <input type="text" id="search" class="rw-input-text" placeholder="Tell us where you want to go..."/>
    <div id="search_result_container" class="search-result__container"></div>
  </div>
`;

document.getElementById('main').innerHTML = main();
document.getElementById('search').addEventListener('keyup', (event) => SearchResult(event, 'search_result_container'));
document.addEventListener('click', (event) => {
  if (event.target && event.target.id.startsWith('q-listitem-')) {
    FlightInfo(event, 'search_result_container');
  }
});
