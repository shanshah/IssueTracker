import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from '../reducers/Reducers';
// import reducers from '../reducers/login/LoginReducer';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

let middleware = [promise(), thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, loggerMiddleware];
}

export default createStore(reducers, {}, applyMiddleware(...middleware));
