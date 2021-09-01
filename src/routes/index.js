import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PublicRoute from './PublicRoute';
import Wallpaper from '../pages/Wallpaper';
import CategoryPage from '../pages/CategoryPage';
import { useSelector, useDispatch } from "react-redux";
import { createApi } from "unsplash-js";
import { ACCESS_ID } from '../config';
import { useState, useEffect } from 'react';
import { useFetch } from '../utils';
import { setToken, setTopicsData } from '../actions';
import { getTopicsData } from '../actions/topicsDataSetter';
import SearchResult from '../components/SearchResult';
import { getToken } from '../actions';
import Dashboard from '../components/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import ProfilePage from '../components/ProfilePage';
import { getUserProfile } from '../actions/profile';


const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: "qwznuSGaQSPzh2IvmSQp2ebPs5Yntu6tEt4Gmnk9Et0"
});


const Routes = props => {
    //const [topicData, setTopicData] = useState();
    const [mounted, setMounted] = useState(false)

    const dispatch = useDispatch();

    const myState = useSelector((state) => state.authReducer);

    const profile = useSelector(state=> state.profile);
    const {userProfile} = profile;

    const FetchTopicData = async () => {
        const data = await useFetch(`https://api.unsplash.com/topics/?client_id=${ACCESS_ID}`);

        if (data.error === null) {
            //setTopicData(data.response);
            dispatch(setTopicsData(data.response));
        }
    }

    if (!mounted) {
        //FetchTopicData();
        dispatch(getTopicsData());
    }


    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(async () => {
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

    useEffect(async ()=>{
        console.log("Inside Access Token useEffect")
        const tokenState = {
            access_token: myState.accessToken,
            token_type: myState.token_type,
            scope: myState.scope
        }
        myState.accessToken && localStorage.setItem("tokenConfig", JSON.stringify(tokenState));
        const token = JSON.parse(localStorage.getItem("tokenConfig"));
        console.log(token);
        if(token && !myState.accessToken)
        {
            console.log("Access Tokem: ", token.access_token)
            dispatch(getUserProfile(token.access_token, token.token_type));
            dispatch(setToken(token));

        }
    },[myState.accessToken])

    const topicsDataSetter = useSelector(state => state.topicsDataSetter);
    const { topicsData } = topicsDataSetter;

    return (
        <Router>
            <Switch>
                {/* {myState.accessToken==null ? <PublicRoute exact path="/" render={() => <HomePage name="Shehryar" />} isScrollaleTabs = {true}/> : <PublicRoute exact path="/" render={() => <Dashboard />} isScrollaleTabs = {false}/>} */}
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