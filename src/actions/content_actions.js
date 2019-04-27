import axios from 'axios';
/* import notifier from 'notifier'; */
/* import { httpError } from 'errors'; */
import fetchAllJson from '../mocks/fetchAll.json'
import {
  FETCH_NOCONTENT,
  FETCH_ONE_SUCCESS,
  FETCH_SUCCESS,
  HTTP_STATUS_404,
  REST_CALL_BEGIN,
  REST_CALL_ERROR,
  REST_CALL_SUCCESS
} from 'actions/types';

const API_URL = process.env.REACT_APP_MAIN_API_URL;

const noContent = () => ({ hasError: true, statusText: 'No Resource Found', statusCode: 404 });

export const fetch = (path) => (dispatch) => {
  dispatch({ type: REST_CALL_BEGIN });
  
  axios
    .get(`${API_URL}/blog${path}`)
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
      if(error.response.status === HTTP_STATUS_404) {
        dispatch({ type: FETCH_NOCONTENT, content: noContent() });
      }
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

export const fetchMockUp = () => (dispatch) => {
  dispatch({ type: REST_CALL_BEGIN });
  dispatch({ type: REST_CALL_SUCCESS });
  dispatch({ type: FETCH_SUCCESS, content: JSON.parse(JSON.stringify(fetchAllJson)) });
};