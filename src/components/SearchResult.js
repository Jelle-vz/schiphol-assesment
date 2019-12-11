import { request } from '../utils/requestHelper';
import config from '../config';

export const SearchResult = async (event, parent) => {
  const { value } = event.target;
  const parentNode = document.getElementById(parent);
  const searchResultField = document.createElement('ul');
  const container = document.getElementById(config.SEARCH_LIST_ID);
  searchResultField.id = config.SEARCH_LIST_ID;
  searchResultField.classList = 'search-list card shadow';

  const mapResults = (result) => result.map((item, idx) => (
    `<li id="q-listitem-${idx}" class="rw-autosuggest__results-flights">${item.airport}</li>`
  )).join('');

  if (value && value.length > 1 && !container) {
    parentNode.appendChild(searchResultField);
  }

  if (value && value.length > 2 && container) {
    const regExp = new RegExp(value, 'i');

    const data = await request(config.API_URL, []);
    const result = data.flights.filter((item) => item.airport.match(regExp));
    container.innerHTML = mapResults(result);
  }
  if (value && value.length < 3 && container) {
    container.remove();
  }
};
