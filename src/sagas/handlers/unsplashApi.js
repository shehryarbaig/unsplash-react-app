import { call, put } from "@redux-saga/core/effects";
import { setQueryImages, setTopicsData, setNewQueryImages, setLikedPhotosId } from "../../actions";
import { setTopicImages, setNewTopicImages } from "../../actions/topicsImagesSetter";
import { requestGetTopicImages, requestGetTopics, requestGetQueryImages, requestGetUserProfile, requestGetLikedPhotos } from "../requests/unsplashApi";
import { imagesSchema } from "../../imagesSchema";
import { normalize } from "normalizr";
import { setUserProfile } from "../../actions/profile";
import { setLikedImages, setNewLikedImages } from "../../actions/photoLikes";

export function* handleGetTopics(action){
    try
    {
        const response = yield call(requestGetTopics);
        const {data} = response;
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
        const response = yield call(requestGetTopicImages, action.topic, action.pageNumber);
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
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
        const response = yield call(requestGetQueryImages, action.searchQuery, action.pageNumber);
        const {data} = response;
        const normalizedData = normalize(data.results, [imagesSchema]);
        yield put(setQueryImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetNewQueryImages(action){
    try
    {
        const response = yield call(requestGetQueryImages, action.searchQuery, 1);
        const {data} = response;
        const normalizedData = normalize(data.results, [imagesSchema]);
        yield put(setNewQueryImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetNewTopicImages(action){
    try
    {
        const response = yield call(requestGetTopicImages, action.topic,1);
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
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
        for (let page = 0; page < Math.ceil(action.totalLikes/10); page++) {

            const likedPhotosResponse = yield call(requestGetLikedPhotos,action.likesUrl, action.accessToken, action.tokenType, page+1)
            console.log("liked photo data", likedPhotosResponse.data)
            yield put(setLikedPhotosId(likedPhotosResponse.data,page+1));
          }
    }
    catch(error)
    {
        console.log(error);
    }
}
export function* handleGetUserProfile(action){
    try
    {
        const response = yield call(requestGetUserProfile, action.accessToken, action.tokenType);
        const {data} = response;
        console.log("handleGetUserProfile: ", data);
        yield put(setUserProfile(data));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetLikedImages(action){
    try
    {
        const response = yield call(requestGetLikedPhotos,action.likesUrl, action.accessToken, action.tokenType, action.pageNumber)
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
        yield put(setLikedImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetNewLikedImages(action){
    try
    {
        const response = yield call(requestGetLikedPhotos,action.likesUrl, action.accessToken, action.tokenType, 1)
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
        console.log("Normalized Liked Images", normalizedData.entities);
        yield put(setNewLikedImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

