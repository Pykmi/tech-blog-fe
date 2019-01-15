import { ADD_NOTIFICATION } from 'actions/types';

export const addNotification = (message, level) => ({
  type: ADD_NOTIFICATION,
  message,
  level
});