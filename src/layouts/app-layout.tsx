import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from '../features/home/home-page';

export function AppLayout() {
  return (
    <Switch>
      <Route path="/home" exact component={HomePage} />
      <Redirect to="/home" />
    </Switch>
  );
}
