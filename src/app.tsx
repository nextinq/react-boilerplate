import React from 'react';
import { hot } from 'react-hot-loader';

import { HashRouter, Route, Switch } from 'react-router-dom';
import { AppLayout } from './layouts/app-layout';

export function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={AppLayout} />
      </Switch>
    </HashRouter>
  );
}

// eslint-disable-next-line no-undef
export const HotApp = hot(module)(App);
