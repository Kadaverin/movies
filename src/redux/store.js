import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './create-root-reducer';
import { rootSaga } from './root-saga';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];

const composeEnhancers = composeWithDevTools({ trace: true });

const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export { store, history };
