import React, { useEffect } from 'react';
import {useHomePageStyle} from "./HomePage.style";
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { changeActiveTab } from '../../actions';

const HomePage = props => {
    const {name} = props;
    const classes = useHomePageStyle();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(changeActiveTab(0));
    },[])

    return (
        <div>
            <h1 className={classes.root}>Home Page {name}</h1>
        </div>
    );
};


export default HomePage;