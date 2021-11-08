import { getCountryDetails } from "../helpers/getCountryDetails";
import { types } from "../types/types";


export const startFilteredStatistics = (statisticData, q) => {
  return (dispatch) => {
    // console.log(statisticData, q)
    const result = getCountryDetails(statisticData, q);
    dispatch(filteredStatistics(result));
  }
}

export const filteredStatistics = (filteredStatistics) => ({
  type: types.filteredResults,
  payload: filteredStatistics
})
