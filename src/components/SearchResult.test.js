// Base
import config from '../config';

// Components
import { SearchResult } from './SearchResult';

// Mockdata
import mockData from '../../static/flights.json';

const parentId = config.SEARCH_LIST_ID;

const createParent = () => {
  const node = document.createElement('div');
  node.id = parentId;

  document.body.appendChild(node);
};

describe('Search result suite', () => {
  beforeEach(() => {
    jest.spyOn(document.body, 'appendChild');
    createParent();
  });

  it('Should render the parent node', () => {
    expect(document.body.querySelector(`#${parentId}`)).toBeTruthy();
  });

  it('Should render flight result on correct input', async () => {
    const airport = 'San Francisco';
    const regExp = new RegExp(airport, 'i');
    const nrOfResults = mockData.flights.filter((item) => item.airport.match(regExp)).length;

    await SearchResult({
      target: {
        value: airport,
      },
    }, mockData.flights);

    expect(document.body.querySelector(`#${parentId}`).children.length).toBe(nrOfResults);
  });

  it('Should not render results when less than three characters flight', async () => {
    const airport = 'Sa';
    const nrOfResults = 0;

    await SearchResult({
      target: {
        value: airport,
      },
    }, mockData.flights);

    expect(document.body.querySelector(`#${parentId}`).children.length).toBe(nrOfResults);
  });

  it('Should render multiple results when available', async () => {
    const airport = 'San';
    const regExp = new RegExp(airport, 'i');
    const nrOfResults = mockData.flights.filter((item) => item.airport.match(regExp)).length;

    await SearchResult({
      target: {
        value: airport,
      },
    }, mockData.flights);

    expect(document.body.querySelector(`#${parentId}`).children.length).toBe(nrOfResults);
  });
});
