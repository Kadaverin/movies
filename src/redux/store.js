import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router/immutable';
import { fromJS } from 'immutable';

import createRootReducer from './create-root-reducer';
import { rootSaga } from './root-saga';

const configureStore = (history, initState = fromJS({})) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware(history), sagaMiddleware];

  const composeEnhancers = composeWithDevTools({ trace: true });

  const store = createStore(
    createRootReducer(history),
    initState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export { configureStore };
