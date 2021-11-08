import { getCountryDetails } from "../helpers/getCountryDetails";
import { types } from "../types/types";


export const startFilteredStatistics = (statisticData, q) => {
  return (dispatch) => {
    const result = getCountryDetails(statisticData, q);
    dispatch(filteredStatistics(result));
  }
}

export const filteredStatistics = (filteredStatistics) => ({
  type: types.filteredResults,
  payload: filteredStatistics
})
