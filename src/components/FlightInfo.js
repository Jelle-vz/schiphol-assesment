// Base
import config from '../config';

export const FlightInfo = async (event, parent, data) => {
  const createdNode = document.getElementById(config.RESULT_CONTAINER_ID);
  const searchList = document.getElementById(config.SEARCH_LIST_ID);
  const parentNode = document.getElementById(parent);

  const element = document.createElement('div');
  element.id = config.RESULT_CONTAINER_ID;
  element.classList = 'search_result card';

  const result = data && data.find((item) => item.airport === event.target.attributes['data-destination'].nodeValue);
  const list = result ? Object.keys(result).map((item) => (
    `<div>
      ${item} : ${result[item]}
    </div>`
  )).join('') : '';

  if (!data || data.length === 0) {
    return; // Should trigger a notification
  }

  if (result) {
    element.innerHTML = `
      <h2>${result.airport}</h2>
      ${list}
      <br/>
      <a class="rw-button" href="//www.schiphol.nl/${result.url}" target="_blank">More info</a>
    `;
  } else {
    element.innerHTML = 'Sorry no data available';
  }

  if (createdNode) {
    createdNode.remove();
  }

  if (searchList) {
    searchList.remove();
  }

  parentNode.appendChild(element);
};
