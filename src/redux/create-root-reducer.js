import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router/immutable';
import { moviesReducer } from './movies/movies.reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    movies: moviesReducer,
  });
