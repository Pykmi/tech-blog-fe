import { ADD_NOTIFICATION } from 'actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case ADD_NOTIFICATION:
      return Object.assign({}, state, {
        level: action.level,
        message: action.message,
        title: action.title,
      });
    default:
      return state;
  }
};
