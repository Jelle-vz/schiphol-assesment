import { request } from '../utils/requestHelper';
import config from '../config';

export const FlightInfo = async (event, parent) => {
  const createdNode = document.getElementById('search_result');
  const parentNode = document.getElementById(parent);
  const element = document.createElement('div');
  element.id = 'search_result';
  element.classList = 'search_result';

  // const resultField = document.getElementById(target);
  const data = await request(config.API_URL, []);
  const result = data.flights.find((item) => item.airport === event.target.textContent);
  const list = Object.keys(result).map((item) => `<div>${item} : ${result[item]}</div>`).join('');

  element.innerHTML = `
    <h2>${result.airport} </h2>
    ${list}
  `;

  if (createdNode) {
    createdNode.remove();
  }

  parentNode.appendChild(element);
};
