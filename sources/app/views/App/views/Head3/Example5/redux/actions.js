import { ADD_TRANSACTION, CALC_BALANCE } from './actionTypes';

export const addTransaction = (payload) => {
  return {
    type: ADD_TRANSACTION,
    amount: payload
  }
}

export const calcBalance = (data) => {
  return {
    type: CALC_BALANCE,
    data
  }
}
