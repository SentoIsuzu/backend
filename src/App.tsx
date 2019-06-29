import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import { hot } from 'react-hot-loader';
const App: React.FC = (props) => {
  return (
    <Router>
        <Switch>       
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
  );
}

// 输出热更新
export default hot(module)(App);
