import { FETCH_CATEGORY_SUCCESS } from 'actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS: {
      return action.content;
    }
    default:
      return state;
  }
};
