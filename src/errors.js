import _ from 'lodash';
import notifier from 'notifier';
import { NOTIFICATION_ERROR } from 'actions/types';

// add unidentified error, in case neither error occurs but is interprited as non http error
/* const nonHttpError = (error) => {
  if (error.message.indexOf('Network Error') !== -1) {
    return;
    notifier.send(disconnected, intl, NOTIFICATION_TYPE_ERROR);
  }
  if (_.hasIn(error, 'response')) {
    notifier.send(axiosTimeout, intl, NOTIFICATION_TYPE_ERROR);
  }
}; */

const httpErrorMessage = (status) => ({ titleId: 'http.error.title', messageId: `http.error.${status}`, level: NOTIFICATION_ERROR });

export const httpError = (error, dispatch) => {
  /* if (!error.response) {
    nonHttpError(error);
    return;
  } */

  if(_.includes([400, 401, 403, 404, 500], error.response.status)) {
    notifier.send(httpErrorMessage(error.response.status), dispatch);
    return;
  }
};
