import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import store from '../store';
import history from '../history';
import Client from './Client';
import Admin from './Admin';

function App() {
  return (
    <StoreProvider store={ store }>
      <CssBaseline />
      <Router history={ history }>
        <Switch>
          <Route exact path='/' component={ Client } />
          <Route exact path='/admin' component={ Admin } />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
