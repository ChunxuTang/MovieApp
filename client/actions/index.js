import * as types from '../constants/ActionTypes';

export const fetchMovies = (payload) => {
  return {
    type: types.FETCH_MOVIES,
    payload
  }
};

export const selectMovie = (movie) => {
  return {
    type: types.SELECT_MOVIE,
    movie
  }
};
