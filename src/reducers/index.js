import { combineReducers } from 'redux';
import notificationReducer from 'reducers/notification_reducer';
import contentReducer from 'reducers/content_reducer.js';

const baseReducer = {
  content: contentReducer,
  notification: notificationReducer
};

export default combineReducers(baseReducer);
