import {Redirect, Route } from 'react-router-dom';
import AppContainer from '../AppContainer';

const PrivateRoute=({render:Component, isScrollaleTabs, ...rest })=> {
	return (
        <Route {...rest} render={(props)=>(
            localStorage.getItem("tokenConfig") ?
            (<AppContainer isScrollaleTabs={isScrollaleTabs}>
                <Component {...props}/>
            </AppContainer>) :
            (<Redirect to="/"/> ) 
        )}/>
    )
}
export default PrivateRoute;