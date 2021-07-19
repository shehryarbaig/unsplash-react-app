import {Route } from 'react-router-dom';
import AppContainer from '../components/AppContainer';

const PublicRoute=({component:Component,...rest})=> {
	return (
        <Route {...rest} component={(props)=>(
            <AppContainer>
                <Component {...props}/>
            </AppContainer>  
        )}/>
    )
}
export default PublicRoute;