import messages from 'messages';
import { ADD_NOTIFICATION } from 'actions/types';

const send = (notification, dispatch) => {
  dispatch({
    type: ADD_NOTIFICATION,
    message: messages[notification.messageId],
    title: messages[notification.titleId],
    level: notification.level
  });
};

export default {
  send
};
