import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { func } from 'prop-types';
import { Container } from '@material-ui/core';

import { ROUTES } from './utils/constants/routes.constants';
import { SearchMoviePage, MoviePage, DiscoverMoviesPage } from './pages';
import { getGenresList } from './redux/genres/genres.actions';
import { HeaderContainer } from './common-containers';
import { useDidMount } from './hooks/lifecircle';
import { useAppStyles } from './app.styles';

function App({ onGetGenresList }) {
  useDidMount(() => {
    onGetGenresList();
  });

  const classes = useAppStyles();

  return (
    <>
      <HeaderContainer />
      <Container className={classes.container}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route path={ROUTES.MOVIE} component={MoviePage} />
          <Route path={ROUTES.SEARCH_MOVIES} component={SearchMoviePage} />
          <Route path={ROUTES.DISCOVER_MOVIES} component={DiscoverMoviesPage} />
          <Redirect to={ROUTES.SEARCH_MOVIES} />
        </Switch>
      </Container>
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
