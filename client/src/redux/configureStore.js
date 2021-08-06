import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    child: childReducer,
    event: eventReducer,
    form:  formReducer,
    user:  userReducer

  }),
  applyMiddleware(thunk, logger)
)