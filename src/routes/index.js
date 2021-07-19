import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PublicRoute from './PublicRoute';
import Wallpaper from '../pages/Wallpaper';


const Routes = props => {
    return (
        <Router>
            <Switch>
            <PublicRoute exact path="/" component={HomePage}/>
            <PublicRoute exact path="/wallpaper" component={Wallpaper}/>
            </Switch>
        </Router>
    );
};



export default Routes;