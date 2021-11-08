import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { filteredStatistics, startFilteredStatistics } from "../../actions/statistics";
import { types } from "../../types/types";
import { getCountryDetails } from '../../helpers/getCountryDetails';

const mockDataFiltered = [
  {
    "continent": "Oceania",
    "country": "Micronesia",
    "population": 115715,
    "cases": {
        "new": null,
        "active": 0,
        "critical": null,
        "recovered": 1,
        "1M_pop": "9",
        "total": 1
    },
    "deaths": {
        "new": null,
        "1M_pop": null,
        "total": null
    },
    "tests": {
        "1M_pop": null,
        "total": null
    },
    "day": "2021-11-05",
    "time": "2021-11-05T20:45:05+00:00"
  },
  {
    "continent": "Asia",
    "country": "Micronesia",
    "population": 1439323776,
    "cases": {
        "new": "+78",
        "active": 1129,
        "critical": 37,
        "recovered": 91840,
        "1M_pop": "68",
        "total": 97605
    },
    "deaths": {
        "new": null,
        "1M_pop": "3",
        "total": 4636
    },
    "tests": {
        "1M_pop": "111163",
        "total": 160000000
    },
    "day": "2021-11-05",
    "time": "2021-11-05T20:45:05+00:00"
  },
]

jest.mock("../../helpers/getCountryDetails", () => ({
	getCountryDetails: jest.fn(() => {
		return mockDataFiltered
	}),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  statistics: {
    filteredResults: mockDataFiltered
  }
}

let store = mockStore(initState);

describe("Testing in action statistics", () => {

  beforeEach(() => {
		store = mockStore(initState);
	});

  test("startFilteredStatistics should dipatch filteredStatistics", async () => {
    store.dispatch(startFilteredStatistics(mockDataFiltered, "Micronesia"));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.filteredResults,
      payload: mockDataFiltered
    })
  })

  test("filteredStatistics shoudld return an array of element and filteredResults type", () => {
    
    expect(filteredStatistics([])).toEqual({
      type: types.filteredResults,
      payload: []
    })

  })

})
