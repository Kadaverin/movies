import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { ROUTES } from './utils/constants/routes.constants';
import { SearchMoviePage } from './pages';
import { store, history } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={ROUTES.MOVIE} component={() => null} />
          <Route path={ROUTES.SEARCH_MOVIES} component={SearchMoviePage} />
          <Redirect to={ROUTES.SEARCH_MOVIES} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
