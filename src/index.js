import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import {rootReducer} from './reducer/rootReducer';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import { createStore, combineReducers } from 'redux'

import App from './App';
import theme from './theme';

const store = createStore(
  combineReducers({
    ...rootReducer,
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
  );
