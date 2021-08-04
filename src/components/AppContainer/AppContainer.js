import React from 'react';
import NavBar from '../NavBar';
import ScrollableTabs from '../ScrollableTabs';

const AppContainer = props => {
   
    const { children } = props;
    return (
        <div>
            <NavBar />
           <ScrollableTabs/>
            {children}
        </div>
    );
};



export default AppContainer;