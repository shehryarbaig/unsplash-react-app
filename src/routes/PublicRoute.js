import {Route } from 'react-router-dom';
import AppContainer from '../components/AppContainer';

const PublicRoute=({render:Component, isScrollaleTabs, ...rest })=> {
	return (
        <Route {...rest} render={(props)=>(
            <AppContainer isScrollaleTabs={isScrollaleTabs}>
                <Component {...props}/>
            </AppContainer>  
        )}/>
    )
}
export default PublicRoute;