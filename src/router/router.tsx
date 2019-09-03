import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routerConfig from './config';
import App from './../App';

export default class IRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/app" component={App} />
      </Switch>
    );
  }
}
