import * as types from '../constants/ActionTypes';

const activeMovie = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_MOVIE:
      return action.movie;
  }

  return state;
};

export default activeMovie;
