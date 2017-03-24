import { ADD_PURCHASES, CALC_TOTAL_COST } from './actionTypes';

export const createPurchases = (payload) => {
  return {
    type: ADD_PURCHASES,
    payload
  }
}

export const calcTotalCost = (data) => {
  return {
    type: CALC_TOTAL_COST,
    data
  }
}

export function addPurchases(purchases) {
  return (dispatch, getState) => {
    const result = dispatch(createPurchases(purchases));
    dispatch(calcTotalCost(getState().app.head3.example4.purchases))
    return result;
  }
}
