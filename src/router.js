import React, {Component} from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';

export default class IRouter extends Component{
    render(){
        return (
            <HashRouter>
                <App></App>
            </HashRouter>
        )
    }
}
