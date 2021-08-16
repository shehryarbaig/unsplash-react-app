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
import { setTopicsData } from '../actions';
import { getTopicsData } from '../actions/topicsDataSetter';
import SearchResult from '../components/SearchResult';
import { getToken } from '../actions';
import Dashboard from '../components/dashboard/Dashboard';

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
        console.log("code inside:" + code);
        if (code) {
          dispatch(getToken(code));
          window.history.pushState("", "", "/");
        }
      }, []);

    const topicsDataSetter = useSelector(state => state.topicsDataSetter);
    const { topicsData } = topicsDataSetter;

    //console.log("topicsData");
    //console.log(topicsData);
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
            </Switch>
        </Router>
    );
};



export default Routes;