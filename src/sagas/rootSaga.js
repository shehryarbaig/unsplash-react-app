import { takeLatest, takeEvery, all } from "@redux-saga/core/effects";
import { GET_TOPICS_DATA, GET_NEW_TOPIC_IMAGES, GET_TOPIC_IMAGES, GET_QUERY_IMAGES, GET_NEW_QUERY_IMAGES, GET_TOKEN , GET_LIKED_PHOTOS_ID} from "../type";
import { handleGetTopicImages, handleGetNewTopicImages, handleGetTopics, handleGetNewQueryImages, handleGetQueryImages, handleGetLikedPhotosId } from "./handlers/unsplashApi";
import { handleGetToken } from "./handlers/auth";
function* fetchTopicsData(){
    console.log("inside watcher");
    yield takeLatest(GET_TOPICS_DATA, handleGetTopics);
};

function* fetchTopicImages(){
    console.log("inside watcher images");
    yield takeLatest(GET_TOPIC_IMAGES, handleGetTopicImages);
};

function* fetchNewTopicImages(){
    console.log("inside watcher images");
    yield takeLatest(GET_NEW_TOPIC_IMAGES, handleGetNewTopicImages);
};

export default function* rootSaga() {
    yield all([
        yield takeLatest(GET_TOPICS_DATA, handleGetTopics),
        yield takeLatest(GET_TOPIC_IMAGES, handleGetTopicImages),
        yield takeLatest(GET_NEW_TOPIC_IMAGES, handleGetNewTopicImages),
        yield takeLatest(GET_QUERY_IMAGES, handleGetQueryImages),
        yield takeLatest(GET_NEW_QUERY_IMAGES, handleGetNewQueryImages),
        yield takeLatest(GET_TOKEN, handleGetToken),
        yield takeLatest(GET_LIKED_PHOTOS_ID, handleGetLikedPhotosId)
    ]);
}