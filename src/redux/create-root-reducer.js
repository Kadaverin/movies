import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router/immutable';
import { moviesReducer } from './movies/movies.reducer';
import { genresReducer } from './genres/genres.reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    Movies: moviesReducer,
    Genres: genresReducer,
  });
