import React, {Component} from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import routerConfig from './config'
import App from './../App';


export default class IRouter extends Component{
    render(){
        return (
            <HashRouter>
                <Route ></Route>
                <Route exact={true} path="/" component={App}/>
            </HashRouter>
        )
    }
}
