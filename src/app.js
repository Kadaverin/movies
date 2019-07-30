import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { func } from 'prop-types';

import { ROUTES } from './utils/constants/routes.constants';
import { SearchMoviePage } from './pages';
import { getGenresList } from './redux/genres/genres.actions';
import { HeaderContainer } from './common-containers';

function App({ onGetGenresList }) {
  useEffect(() => {
    onGetGenresList();
  }, [onGetGenresList]);

  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route path={ROUTES.MOVIE} component={() => null} />
        <Route path={ROUTES.SEARCH_MOVIES} component={SearchMoviePage} />
        <Redirect to={ROUTES.SEARCH_MOVIES} />
      </Switch>
    </>
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
