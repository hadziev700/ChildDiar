import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import application from './features/application';
import { composeWithDevTools } from 'redux-devtools-extension';
import childReducer from './features/child';
import eventReducer from './features/event';
import usersReducer from './features/users';
import formReducer from './features/form'

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    child:childReducer,
    eventReducer,
    application: application,
    users: usersReducer,
    form: formReducer,
  }), composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);