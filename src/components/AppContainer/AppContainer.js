import React, { useEffect } from 'react';
import NavBar from '../NavBar';
import ScrollableTabs from '../ScrollableTabs';

const AppContainer = props => {
   
    const { isScrollaleTabs, children } = props;

    useEffect(()=>{
        
    })

    return (
        <div>
            <NavBar />
           { isScrollaleTabs && <ScrollableTabs/>}
            {children}
        </div>
    );
};



export default AppContainer;