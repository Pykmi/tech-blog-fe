import { FETCH_CATEGORY_SUCCESS } from 'actions/types';

export default (state = {
  name: '',
  content: {}
}, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS: {
      return {
        name: action.category,
        content: action.content
      };
    }
    default:
      return state;
  }
};
