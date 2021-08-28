import { call, put } from "@redux-saga/core/effects";
import { setQueryImages, setTopicsData, setNewQueryImages, setLikedPhotosId } from "../../actions";
import { setTopicImages, setNewTopicImages } from "../../actions/topicsImagesSetter";
import { requestGetTopicImages, requestGetTopics, requestGetQueryImages, requestGetMyProfile, requestGetLikedPhotos } from "../requests/unsplashApi";
import { imagesSchema } from "../../imagesSchema";
import { normalize } from "normalizr";

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
        const response = yield call(requestGetTopicImages, action.topic, action.pageNumber);
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
        console.log("image count: " + action.pageNumber);
        console.log("data images: ", data);
        console.log("normalized images: ",normalizedData);
        yield put(setTopicImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetQueryImages(action){
    try
    {
        console.log("inside query images");
        const response = yield call(requestGetQueryImages, action.searchQuery, action.pageNumber);
        const {data} = response;
        console.log("image count: " + action.pageNumber);
        console.log("data query images");
        console.log(data);
        yield put(setQueryImages(data.results));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetNewQueryImages(action){
    try
    {
        console.log("inside query new images");
        const response = yield call(requestGetQueryImages, action.searchQuery, 1);
        const {data} = response;
        //console.log("image count: " + action.pageNumber);
        console.log("data query new images");
        console.log(data);
        yield put(setNewQueryImages(data.results));
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
        const response = yield call(requestGetTopicImages, action.topic,1);
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
        console.log("data images");
        console.log(normalizedData);
        yield put(setNewTopicImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetLikedPhotosId(action){
    try
    {
        console.log("inside likedPhoto handler");
        const response = yield call(requestGetMyProfile, action.accessToken, action.tokenType);
        const {data} = response;
        for (let page = 0; page < Math.ceil(data.total_likes/10); page++) {

            const likedPhotosResponse = yield call(requestGetLikedPhotos,data.links.likes, action.accessToken, action.tokenType, page+1)
            yield put(setLikedPhotosId(likedPhotosResponse.data,page+1));
          }
    }
    catch(error)
    {
        console.log(error);
    }
}

