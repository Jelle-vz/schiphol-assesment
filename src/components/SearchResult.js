// Base
import config from '../config';


export const SearchResult = async (event, data) => {
  const { value } = event.target;
  const container = document.getElementById(config.SEARCH_LIST_ID);

  const mapResults = (result) => result.map((item, idx) => (
    `<li 
      id="q-listitem-${idx}" 
      class="rw-autosuggest__results-flights"
      data-destination="${item.airport}"
    >
      ${item.airport} | ${item.flightNumber}
    </li>`
  )).join('');

  if (!data || data.length === 0) {
    return; // Should trigger a notification
  }

  if (value && value.length > 2 && container) {
    const regExp = new RegExp(value, 'i');

    const result = data.filter((item) => item.airport.match(regExp));
    container.innerHTML = mapResults(result);

    if (result.length > 0) {
      container.innerHTML = mapResults(result);
      container.style.display = 'block';
    }
  }
  if (value && value.length < 3 && container) {
    container.innerHTML = '';
    container.style.display = 'none';
  }
};
