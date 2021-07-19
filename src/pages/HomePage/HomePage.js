import React from 'react';
import {useHomePageStyle} from "./HomePage.style";

const HomePage = props => {
    const {name} = props;
    const classes = useHomePageStyle();

    return (
        <div>
            <h1 className={classes.root}>Home Page {name}</h1>
        </div>
    );
};


export default HomePage;