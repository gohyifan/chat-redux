// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// import reducers
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import messagesReducer from './reducers/messages_reducer';
import currentUserReducer from './reducers/current_user_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

const initialState = {
  channels: ['singapore', 'COVID-19', 'coding'],
  selectedChannel: 'singapore',
  messages: [],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

// State and reducers
const reducers = combineReducers({
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer,
  currentUser: currentUserReducer
});

// configure middlewares
const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
