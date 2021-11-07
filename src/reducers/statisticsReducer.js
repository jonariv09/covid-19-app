import { types } from "../types/types";

const initialState = {
  filteredResults: []
}

export const statisticsReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.filteredResults:
      return {
        ...state,
        filteredResults: [ ...action.payload ]
      }
    default:
      return state;
  }

}
