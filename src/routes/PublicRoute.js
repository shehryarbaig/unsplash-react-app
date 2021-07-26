import {Route } from 'react-router-dom';
import AppContainer from '../components/AppContainer';

const PublicRoute=({render:Component,...rest })=> {
	return (
        <Route {...rest} render={(props)=>(
            <AppContainer>
                <Component {...props}/>
            </AppContainer>  
        )}/>
    )
}
export default PublicRoute;