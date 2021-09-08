import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PublicRoute from './PublicRoute';
import CategoryPage from '../pages/CategoryPage';
import { setToken } from '../actions';
import { getTopicsData } from '../actions/topicsDataSetter';
import SearchResult from '../components/SearchResult';
import { getToken } from '../actions';
import PrivateRoute from './PrivateRoute';
import ProfilePage from '../components/ProfilePage';
import { getUserProfile } from '../actions/profile';


const Routes = props => {
    const [mounted, setMounted] = useState(false)

    const dispatch = useDispatch();

    const myState = useSelector((state) => state.authReducer);

    const profile = useSelector(state=> state.profile);
    const {userProfile} = profile;

    if (!mounted) {
        dispatch(getTopicsData());
    }


    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get("code");
        if (code) {
          dispatch(getToken(code));
          
          window.history.pushState("", "", "/");
        }
      }, []);

    useEffect(()=>{
        if(myState.accessToken)
        {
            dispatch(getUserProfile(myState.accessToken, myState.token_type));
        }
    },[myState.accessToken])

    useEffect(()=>{
        const tokenState = {
            access_token: myState.accessToken,
            token_type: myState.token_type,
            scope: myState.scope
        }
        myState.accessToken && localStorage.setItem("tokenConfig", JSON.stringify(tokenState));
        const token = JSON.parse(localStorage.getItem("tokenConfig"));
        if(token && !myState.accessToken)
        {
            dispatch(getUserProfile(token.access_token, token.token_type));
            dispatch(setToken(token));

        }
    },[myState.accessToken])

    const topicsDataSetter = useSelector(state => state.topicsDataSetter);
    const { topicsData } = topicsDataSetter;

    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/" render={() => <HomePage name="Shehryar" />} isScrollaleTabs = {true}/>
                <PublicRoute exact path="/search" render={() => <SearchResult />} isScrollaleTabs = {false}/>
                {
                    topicsData.map((topic, index) => {
                        return <PublicRoute exact path={`/${topic.slug}`} render={() => <CategoryPage topic = {topic} topicIndex = {index} />} isScrollaleTabs = {true}/>

                    })
                }
                {userProfile && <PrivateRoute exact path="/profile" render={()=> <ProfilePage/>} isScrollaleTabs = {false}/>}
            </Switch>
        </Router>
    );
};



export default Routes;