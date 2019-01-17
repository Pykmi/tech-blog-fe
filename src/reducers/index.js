import { combineReducers } from 'redux';
import notificationReducer from 'reducers/notification_reducer';
import articleReducer from 'reducers/article_reducer.js';

const baseReducer = {
  articles: articleReducer,
  notification: notificationReducer
};

export default combineReducers(baseReducer);
