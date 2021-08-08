import React from 'react';
import NavBar from '../NavBar';
import ScrollableTabs from '../ScrollableTabs';

const AppContainer = props => {
   
    const { isScrollaleTabs, children } = props;
    return (
        <div>
            <NavBar />
           { isScrollaleTabs && <ScrollableTabs/>}
            {children}
        </div>
    );
};



export default AppContainer;