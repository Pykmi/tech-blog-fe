import { FETCH_SUCCESS } from 'actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return action.content;
    }
    default:
      return state;
  }
};
