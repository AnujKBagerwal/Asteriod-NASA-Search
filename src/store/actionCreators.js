import {
  GET_API_List,
  GET_SEARCH_VALUE,
  SUBMIT_BUTTON,
  RANDOM_BUTTON,
} from './action';
import Axios from 'axios';
import { astroidKey } from '../constant/astroidKey';

export const getApiList = () => {
  return (dispatch) => {
    Axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${astroidKey}`
    )
      .then((res) => {
        dispatch({
          type: GET_API_List,
          payload: res.data.near_earth_objects,
        });
      })
      .catch((err) => alert(err.errors));
  };
};

export const getSearchResult = (payload) => {
  return (dispatch) => {
    dispatch({
      type: GET_SEARCH_VALUE,
      payload: payload,
    });
  };
};

export const submitButtonAction = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SUBMIT_BUTTON,
    });
  };
};

export const randomButtonAction = (payload) => {
  return (dispatch) => {
    dispatch({
      type: RANDOM_BUTTON,
    });
  };
};
