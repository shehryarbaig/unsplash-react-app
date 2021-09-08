import React from 'react';
import NavBar  from "../components/NavBar";
import ScrollableTabs from '../components/ScrollableTabs';

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