import { combineReducers } from 'redux';
import activeMovie from './reducer_active_movie';
import movies from './reducer_movies';

const rootReducer = combineReducers({
  activeMovie,
  movies
});

export default rootReducer;
