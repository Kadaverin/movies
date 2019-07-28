import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { func } from 'prop-types';

import { useContainerStyles } from './app.styles';
import { ROUTES } from './utils/constants/routes.constants';
import { SearchMoviePage } from './pages';
import { history } from './redux/store';
import { getGenresList } from './redux/genres/genres.actions';

function App({ onGetGenresList }) {
  // const classes = useContainerStyles();
  useEffect(() => onGetGenresList(), []);

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={ROUTES.MOVIE} component={() => null} />
        <Route path={ROUTES.SEARCH_MOVIES} component={SearchMoviePage} />
        <Redirect to={ROUTES.SEARCH_MOVIES} />
      </Switch>
    </ConnectedRouter>
  );
}

App.propTypes = {
  onGetGenresList: func.isRequired,
};

const mapDispatchToProps = {
  onGetGenresList: getGenresList,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
