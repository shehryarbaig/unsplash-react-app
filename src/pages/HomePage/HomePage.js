import React from 'react';
import {useHomePageStyle} from "./HomePage.style";
import { useLocation } from 'react-router';

const HomePage = props => {
    const {name} = props;
    const classes = useHomePageStyle();
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <h1 className={classes.root}>Home Page {name}</h1>
        </div>
    );
};


export default HomePage;