import { changeActiveTabUrl } from "../actions";
import { setTopic } from "../actions";
import { getTopicImages , getNewTopicImages} from "../actions/topicsImagesSetter";

export const handleTabChange = (history, dispatch, topicsData, activeTabText) => {
    if(activeTabText==="Home Page")
    {
        history.push(`/`);
    }
    else{

        topicsData.map(topic => {
            if(topic.title===activeTabText)
            {
                //dispatch(changeActiveTabUrl(topic.links.self));
                history.push(`/${topic.slug}`);
                dispatch(setTopic(topic));
                //dispatch(getNewTopicImages(topic.slug));
            }
        })
    }

}

export const useFetch = async (url) => {
    const options={
        headers:{
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            'Content-Type':'application/json'
        }
    }

    let response = null;
    let error = null;
    try {
        const res = await fetch(url,options);
        const json = await res.json();
        response = json

    } catch (err) {
        error = err
    }


    return { response, error };
};

export const CapitalizeFirstLetterOnly = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

export const capitalizeFirstLetter = (string) => {
    if(string)
        return string.charAt(0).toUpperCase() + string.slice(1);
    }