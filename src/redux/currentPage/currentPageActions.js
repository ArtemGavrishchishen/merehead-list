import types from './currentPageActionTypes';

const paginationPrev = () => ({
  type: types.PREVIOUS_PAGE,
});
const paginationNext = () => ({
  type: types.NEXT_PAGE,
});

export default {
  paginationPrev,
  paginationNext,
};
