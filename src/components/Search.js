import { request } from '../utils/requestHelper';
import config from '../config';

export const Search = async (event, parent) => {
  const parentNode = document.getElementById(parent);
  const searchResultField = document.createElement('ul');
  searchResultField.id = config.SEARCH_LIST_ID;
  searchResultField.classList = 'search-list card';
  const container = document.getElementById(config.SEARCH_LIST_ID);
  const { value } = event.target;

  if (value && value.length > 1 && !container) {
    parentNode.appendChild(searchResultField);
  }

  const mapResults = (result) => result.map((item, idx) => (
    `<li id="q-listitem-${idx}" class="rw-autosuggest__results-flights">${item.airport}</li>`
  )).join('');

  if (value && value.length > 2 && container) {
    const data = await request(config.API_URL, []);
    const result = data.flights.filter((item) => item.airport.includes(value));
    container.innerHTML = mapResults(result);
  }
  if (value && value.length < 3 && container) {
    container.remove();
  }
};
