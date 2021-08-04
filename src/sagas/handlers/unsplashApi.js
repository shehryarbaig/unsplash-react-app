import { call, put } from "@redux-saga/core/effects";
import { setTopicsData } from "../../actions";
import { setTopicImages, setNewTopicImages } from "../../actions/topicsImagesSetter";
import { requestGetTopicImages, requestGetTopics } from "../requests/unsplashApi";

export function* handleGetTopics(action){
    try
    {
        console.log("inside handler");
        const response = yield call(requestGetTopics);
        const {data} = response;
        console.log("data");
        console.log(data);
        yield put(setTopicsData(data))
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetTopicImages(action){
    try
    {
        console.log("inside images");
        const response = yield call(requestGetTopicImages, action.topic, action.imagesCurrrentCount);
        const {data} = response;
        console.log("image count: " + action.imagesCurrrentCount);
        console.log("data images");
        console.log(data);
        yield put(setTopicImages(data));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetNewTopicImages(action){
    try
    {
        console.log("inside images");
        const response = yield call(requestGetTopicImages, action.topic,0);
        const {data} = response;
        console.log("data images");
        console.log(data);
        yield put(setNewTopicImages(data));
    }
    catch(error)
    {
        console.log(error);
    }
}