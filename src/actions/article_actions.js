import axios from 'axios';
/* import notifier from 'notifier'; */
import { httpError } from 'errors';
import { FETCH_SUCCESS, REST_CALL_BEGIN, REST_CALL_SUCCESS, REST_CALL_ERROR } from 'actions/types';

const API_URL = process.env.REACT_APP_MAIN_API_URL;

export const fetchAll = () => (dispatch) => {
  dispatch({ type: REST_CALL_BEGIN });
  axios
    .get(`${API_URL}/blog`)
    .then((res) => {
      dispatch({ type: REST_CALL_SUCCESS });
      if(res.status === 200) {
        dispatch({ type: FETCH_SUCCESS, articles: res.data });
      }
      if(res.status === 204) {
        /* notifier.send(noRecordMessage(), dispatch); */
        console.log(res);
      }
    })
    .catch((error) => {
      dispatch({ type: REST_CALL_ERROR });
      console.log(error);
    });
};
