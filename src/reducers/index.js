import { combineReducers } from 'redux';
import notificationReducer from 'reducers/notification_reducer';

const baseReducer = {
  notification: notificationReducer
};

export default combineReducers(baseReducer);