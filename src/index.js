import { Search } from './components/Search';
import { FlightInfo } from './components/FlightInfo';

import bgImage from './assets/svg/woman-sitting';

import '../sass/index.scss';

const Main = () => `
  <div class="wrapper card">
    <div class="heading">
      <div><h1>Welcome traveler</h1></div>
      <div>${bgImage}</div>
    </div>
    <input type="text" id="search" class="rw-input-text" placeholder="Tell us where you want to go..."/>
    <div id="search_result_container"></div>
  </div>
`;

document.getElementById('main').innerHTML = Main();
document.getElementById('search').addEventListener('keyup', (event) => Search(event, 'search_result_container'));
document.addEventListener('click', (event) => {
  if (event.target && event.target.id.startsWith('q-listitem-')) {
    FlightInfo(event, 'search_result_container');
  }
});
