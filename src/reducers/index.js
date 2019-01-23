import { combineReducers } from 'redux';
import notificationReducer from 'reducers/notification_reducer';
import categoryReducer from 'reducers/category_reducer.js';
import contentReducer from 'reducers/content_reducer.js';
import recentReducer from 'reducers/recent_reducer.js';

const baseReducer = {
  category: categoryReducer,
  frontPage: contentReducer,
  notification: notificationReducer,
  recent: recentReducer
};

export default combineReducers(baseReducer);
