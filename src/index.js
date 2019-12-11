// Base
import config from './config';

// Components
import { SearchResult } from './components/SearchResult';
import { FlightInfo } from './components/FlightInfo';

// Utils
import { request } from './utils/requestHelper';

// Assets
import bgImage from './assets/svg/woman-sitting';
import '../sass/index.scss';

const initialDataLoaded = (data) => {
  const { flights } = data;
  document.getElementById('main').classList = '';
  document.getElementById('hero_image').innerHTML = bgImage;

  document.getElementById('search')
    .addEventListener('keyup', (event) => SearchResult(event, config.SEARCH_RESULT_WRAPPER_ID, flights));

  document.addEventListener('click', (event) => {
    if (event.target && event.target.id.startsWith('q-listitem-')) {
      FlightInfo(event, config.SEARCH_RESULT_WRAPPER_ID, flights);
    }
  });
};

request(config.API_URL, []).then(initialDataLoaded);
