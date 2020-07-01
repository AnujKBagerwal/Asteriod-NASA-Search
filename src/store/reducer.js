import {
  GET_API_List,
  GET_SEARCH_VALUE,
  SUBMIT_BUTTON,
  RANDOM_BUTTON,
} from './action';
import { random } from 'lodash';

const initialState = {
  astroidList: [],
  selected: {},
  searchText: '',
  errorText: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_API_List:
      return {
        ...state,
        astroidList: payload,
        errorText: '',
      };

    case GET_SEARCH_VALUE:
      return {
        ...state,
        searchText: payload,
        errorText: '',
      };

    case SUBMIT_BUTTON:
      const { astroidList, searchText } = state;
      const matchFound = astroidList.filter((data) => data.id === searchText);
      if (matchFound.length) {
        return {
          ...state,
          selected: matchFound[0],
        };
      } else {
        return {
          ...state,
          selected: {},
          errorText: 'Match Not Found',
        };
      }

    case RANDOM_BUTTON:
      const randomNumber = random(0, 19);
      return {
        ...state,
        selected: state.astroidList[randomNumber],
        errorText: '',
      };

    default:
      return state;
  }
};

export default reducer;
