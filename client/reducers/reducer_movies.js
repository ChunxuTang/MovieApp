import * as types from '../constants/ActionTypes';

const movies = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return action.payload;
  }
  return state;
};

export default movies;
