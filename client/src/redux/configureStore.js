import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import application from './features/application';
import { composeWithDevTools } from 'redux-devtools-extension';
import childReducer from './features/child';
import eventReducer from './features/event';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    child:childReducer,
    event:eventReducer,
    application: application,
  }), composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);