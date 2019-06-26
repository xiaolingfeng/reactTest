import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import Index from './pages/index/index.js';
let path = require('path');

let index = import('./pages/index/index.js');


console.log(path.resolve('@'));

class BasicRoute extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path={'/'} component={Index}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default BasicRoute;