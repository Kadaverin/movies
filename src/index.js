import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './app';
import { configureStore } from './redux/store';
import * as serviceWorker from './serviceWorker';
import './index.css';

const history = createBrowserHistory();
const store = configureStore(history);
const theme = createMuiTheme();

const app = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
