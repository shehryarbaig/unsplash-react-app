import React from 'react';
import NavBar from '../NavBar';


const AppContainer = props => {
    const {children} = props; 
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
};



export default AppContainer;