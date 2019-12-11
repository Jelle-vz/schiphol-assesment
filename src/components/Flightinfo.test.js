// Base
import config from '../config';

// Components
import { FlightInfo } from './FlightInfo';

// Mockdata
import mockData from '../../static/flights.json';

const parentId = config.SEARCH_RESULT_WRAPPER_ID;

const createParent = () => {
  const node = document.createElement('div');
  node.id = parentId;

  document.body.appendChild(node);
};

describe('Flight info suite', () => {
  beforeEach(() => {
    jest.spyOn(document.body, 'appendChild');
    createParent();
  });

  it('Should render the parent node', () => {
    expect(document.body.querySelector(`#${parentId}`)).toBeTruthy();
  });

  it('Should render correct flight info', async () => {
    const airport = 'San Francisco';
    await FlightInfo({
      target: {
        attributes: {
          'data-destination': {
            nodeValue: airport,
          },
        },
      },
    }, parentId, mockData.flights);

    expect(document.body.querySelector(`#${parentId} h2`).innerHTML).toEqual(airport);
  });

  it('Should render "no data" for incorrect query', async () => {
    const airport = 'San Antonio';

    await FlightInfo({
      target: {
        attributes: {
          'data-destination': {
            nodeValue: airport,
          },
        },
      },
    }, parentId, mockData.flights);

    expect(document.body.querySelector(`#${parentId} > div`).innerHTML).toEqual('Sorry no data available');
  });
});
