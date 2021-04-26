import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './features/home';
import { HOME_URL } from './features/home/resources/constants';

import More from './features/more';
import { MORE_URL } from './features/more/resources/constants';

import Ooops from './features/ooops';
import { OOOPS_URL } from './features/ooops/resources/constants';

import './styles/App.scss';

const App = () => (
  <Switch>
    <Route component={Home} path={HOME_URL} exact />
    <Route component={More} path={MORE_URL} exact />
    <Route component={Ooops} path={OOOPS_URL} exact />
    <Redirect to={OOOPS_URL} />
  </Switch>
);

export default App;
