import { changeActiveTabUrl } from "../actions";

export const handleTabChange = (activeTabNumber, history, dispatch) => {
    switch (activeTabNumber) {
        case 0:
            dispatch(changeActiveTabUrl("https://google.com"));
            history.push("/");
            break;
        case 1:
            dispatch(changeActiveTabUrl("https://abc.com"));
            history.push("/wallpaper");
            break;
        case 2:
            dispatch(changeActiveTabUrl("https://xyz.com"));
            history.push("/wallpaper1");
            break;
        case 3:
            dispatch(changeActiveTabUrl("https://efg.com"));
            history.push("/wallpaper2");
            break;
        case 4:
            dispatch(changeActiveTabUrl("https://hij.com"));
            history.push("/wallpaper3");
            break;

        default:
            history.push("/");
            break;
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