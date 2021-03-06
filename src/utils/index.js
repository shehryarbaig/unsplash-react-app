import { setTopic } from "../actions";

export const handleTabChange = (history, dispatch, topicsData, activeTabText) => {
    if(activeTabText==="Home Page")
    {
        history.push(`/`);
    }
    else{

        topicsData.map(topic => {
            if(topic.title===activeTabText)
            {
                history.push(`/${topic.slug}`);
                dispatch(setTopic(topic));
            }
            return true;
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


export const useQuery = (location) => {
    return new URLSearchParams(location.search);
    }

export const downloadImage = (response, fileName) =>
{
    const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${fileName}.jpg`);
        document.body.appendChild(link);
        link.click();
}
