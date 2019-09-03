import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Admin from './admin';
import { hot } from 'react-hot-loader';
const App: React.FC = (props) => {
  return (
    <Router>
        <Switch>       
            <Route path="/login" component={Login} />
            <Route  path="/" component={Admin} />
        </Switch>
    </Router>
  );
}
/*
const action ={
  type:'changeInput',
  value:'真的是我'
}
store.dispacth(action)
*/
// 输出热更新
export default hot(module)(App);
