
import { ADD_TRANSACTION, CALC_BALANCE } from './actionTypes';

import { BALANCE_START_MONTH, TAX } from '../consts';

const initialState = [];

export const addTransaction = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      const id = state.reduce((maxId, trans) => Math.max(trans.id, maxId), 0) + 1;
      return [
        ...state, { id, amount: action.amount }
      ]
    default:
      return state;
  }
}

export const calcBalance = (state = BALANCE_START_MONTH, action) => {
  switch (action.type) {
    case CALC_BALANCE:
      let currentBalance = action.data.reduce((sum, current) => (sum + parseInt(current.amount, 10)), 0);
      const federalTax = currentBalance * TAX;
      return BALANCE_START_MONTH - currentBalance - federalTax;
    default:
      return state;
  }
}
