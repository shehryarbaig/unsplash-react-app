import { takeLatest, takeEvery, all } from "@redux-saga/core/effects";
import { GET_TOPICS_DATA, GET_NEW_TOPIC_IMAGES, GET_TOPIC_IMAGES } from "../type";
import { handleGetTopicImages, handleGetNewTopicImages, handleGetTopics } from "./handlers/unsplashApi";

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
        yield takeLatest(GET_NEW_TOPIC_IMAGES, handleGetNewTopicImages)
    ]);
}