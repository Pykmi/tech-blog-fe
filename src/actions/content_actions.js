import axios from 'axios';
/* import notifier from 'notifier'; */
/* import { httpError } from 'errors'; */
import { FETCH_SUCCESS, FETCH_CATEGORY_SUCCESS, FETCH_ONE_SUCCESS, REST_CALL_BEGIN, REST_CALL_SUCCESS, REST_CALL_ERROR } from 'actions/types';

const API_URL = process.env.REACT_APP_MAIN_API_URL;

export const fetch = () => (dispatch) => {
  dispatch({ type: REST_CALL_BEGIN });
  axios
    .get(`${API_URL}/blog`)
    .then((res) => {
      dispatch({ type: REST_CALL_SUCCESS });
      if(res.status === 200) {
        dispatch({ type: FETCH_SUCCESS, content: res.data });
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

export const fetchByCategory = (category) => (dispatch) => {
  dispatch({ type: REST_CALL_BEGIN });
  axios
    .get(`${API_URL}/blog/category/${category}`)
    .then((res) => {
      dispatch({ type: REST_CALL_SUCCESS });
      if(res.status === 200) {
        dispatch({ type: FETCH_CATEGORY_SUCCESS, content: res.data, category });
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

export const fetchOne = (name) => (dispatch) => {
  dispatch({ type: REST_CALL_BEGIN });
  axios
    .get(`${API_URL}/blog/article/${name}`)
    .then((res) => {
      dispatch({ type: REST_CALL_SUCCESS });
      if(res.status === 200) {
        dispatch({ type: FETCH_ONE_SUCCESS, content: res.data });
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
