import types from './currentPageActionTypes';

const initialState = 1;

export default function paginationReducer(state = initialState, { type }) {
  switch (type) {
    case types.PREVIOUS_PAGE:
      if (state === 1) {
        return state;
      }
      return state - 1;

    case types.NEXT_PAGE:
      return state + 1;

    default:
      return state;
  }
}
