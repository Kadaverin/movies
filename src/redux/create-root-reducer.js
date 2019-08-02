import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { moviesReducer } from './movies/movies.reducers';
import { genresReducer } from './genres/genres.reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    Movies: moviesReducer,
    Genres: genresReducer,
  });
