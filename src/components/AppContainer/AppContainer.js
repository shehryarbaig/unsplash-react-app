import React from 'react';
import NavBar from '../NavBar';
import ScrollableTabs from '../ScrollableTabs';
import { createApi } from "unsplash-js";
import { ACCESS_ID } from '../../config';
import { useState, useEffect } from 'react';
import { useFetch } from '../../utils';

const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: "qwznuSGaQSPzh2IvmSQp2ebPs5Yntu6tEt4Gmnk9Et0"
});


const AppContainer = props => {
    const { children } = props;
    const [topicData, setTopicData] = useState();
    const [mounted, setMounted] = useState(false)

    const FetchTopicData = async () => {
        const data = await useFetch(`https://api.unsplash.com/topics/?client_id=${ACCESS_ID}`);

        if (data.error === null) {
            setTopicData(data.response)
        }
    }
    
    if (!mounted) {
        FetchTopicData();
    }


    useEffect(() => {
        setMounted(true);
    }, []);

    console.log(topicData);
    console.log("App Container");
    return (
        <div>
            <NavBar />
            {topicData && <ScrollableTabs topics = {topicData} />}
            {children}
        </div>
    );
};



export default AppContainer;