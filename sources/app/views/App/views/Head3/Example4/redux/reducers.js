import { ADD_PURCHASES, CALC_TOTAL_COST } from './actionTypes';

const initialState = [];

export const createPurchases = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PURCHASES:
      const id = state.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1;
      const { name, price } = action.payload;

      return [...state, { id, name, price }];
    default:
      return state;
  }
}

export const calcTotalCost = (state = 0, action) => {
  switch (action.type) {
    case CALC_TOTAL_COST:
      return action.data.reduce((sum, current) => (sum + parseInt(current.price, 10)), 0);
    default:
      return state;
  }
}
