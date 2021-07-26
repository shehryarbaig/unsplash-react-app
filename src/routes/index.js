import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PublicRoute from './PublicRoute';
import Wallpaper from '../pages/Wallpaper';
import CategoryPage from '../pages/CategoryPage';


const Routes = props => {
    return (
        <Router>
            <Switch>
            <PublicRoute exact path="/" render={() => <HomePage name="Shehryar" />}/>
            <PublicRoute exact path="/wallpaper" render={() => <CategoryPage/>}/>
            <PublicRoute exact path="/wallpaper1" render={() => <CategoryPage/>}/>
            <PublicRoute exact path="/wallpaper2" render={() => <CategoryPage/>}/>
            <PublicRoute exact path="/wallpaper3" render={() => <CategoryPage/>}/>
            {/* <PublicRoute exact path="/wallpaper1" component={Wallpaper}/>
            <PublicRoute exact path="/wallpaper2" component={Wallpaper}/>
            <PublicRoute exact path="/wallpaper3" component={Wallpaper}/> */}
            </Switch>
        </Router>
    );
};



export default Routes;