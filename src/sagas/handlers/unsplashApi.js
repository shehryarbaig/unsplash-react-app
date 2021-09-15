import { call, put } from "@redux-saga/core/effects";
import { normalize } from "normalizr";
import { setQueryImages, setTopicsData, setNewQueryImages, setLikedPhotosId } from "../../actions";
import { setTopicImages, setNewTopicImages } from "../../actions/topicsImagesSetterActions";
import { requestGetTopicImages, requestGetTopics, requestGetQueryImages, requestGetUserProfile, requestGetLikedPhotos, requestGetHomePageImages, requestLikeButtonClick, requestGetImage } from "../requests/unsplashApi";
import { imagesSchema } from "../../imagesSchema";
import { setUserProfile } from "../../actions/profileActions";
import { getLikedPhotosId, setLikedImages, setNewLikedImages } from "../../actions/photoLikesActions";
import { setHomePageImages, setNewHomePageImages } from "../../actions/homePageImagesActions";
import { downloadImage } from "../../utils";

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
        const response = yield call(requestGetTopicImages, action.payload.topic, action.payload.pageNumber);
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
        yield put(setTopicImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetHomePageImages(action){
    try
    {
        const response = yield call(requestGetHomePageImages, action.payload.pageNumber);
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
        yield put(setHomePageImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetNewHomePageImages(action){
    try
    {
        const response = yield call(requestGetHomePageImages, 1);
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
        yield put(setNewHomePageImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetQueryImages(action){
    try
    {
        const response = yield call(requestGetQueryImages, action.payload.searchQuery, action.payload.pageNumber);
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
        const response = yield call(requestGetQueryImages, action.payload.searchQuery, 1);
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
        const response = yield call(requestGetTopicImages, action.payload.topic,1);
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
        for (let page = 0; page < Math.ceil(action.payload.totalLikes/10); page++) {

            const likedPhotosResponse = yield call(requestGetLikedPhotos,action.payload.likesUrl, action.payload.accessToken, action.payload.tokenType, page+1)
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
        const response = yield call(requestGetUserProfile, action.payload.accessToken, action.payload.tokenType);
        const {data} = response;
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
        const response = yield call(requestGetLikedPhotos,action.payload.likesUrl, action.payload.accessToken, action.payload.tokenType, action.payload.pageNumber)
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
        yield put(setLikedImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleLikeButtonClick(action){
    try
    {
        yield call(requestLikeButtonClick,action.payload.imageId, action.payload.isLiked, action.payload.accessToken, action.payload.tokenType)
        yield put(getLikedPhotosId(action.payload.likesUrl,action.payload.totalLikes, action.payload.accessToken, action.payload.tokenType));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetNewLikedImages(action){
    try
    {
        const response = yield call(requestGetLikedPhotos,action.payload.likesUrl, action.payload.accessToken, action.payload.tokenType, 1)
        const {data} = response;
        const normalizedData = normalize(data, [imagesSchema]);
        yield put(setNewLikedImages(normalizedData.entities));
    }
    catch(error)
    {
        console.log(error);
    }
}

export function* handleGetImage(action){
    try
    {
        const response = yield call(requestGetImage,action.payload.url);
        downloadImage(response, action.payload.fileName);
    }
    catch(error)
    {
        console.log(error);
    }
}

