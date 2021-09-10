import { takeLatest, all } from "@redux-saga/core/effects";
import { GET_TOPICS_DATA, GET_NEW_TOPIC_IMAGES, GET_TOPIC_IMAGES, GET_QUERY_IMAGES, GET_NEW_QUERY_IMAGES, GET_TOKEN , GET_LIKED_PHOTOS_ID, GET_MY_PROFILE, GET_NEW_LIKED_IMAGES, GET_LIKED_IMAGES, GET_NEW_HOME_PAGE_IMAGES, GET_HOME_PAGE_IMAGES, LIKE_BUTTON_CLICK} from "../actions/type";
import { handleGetTopicImages, handleGetNewTopicImages, handleGetTopics, handleGetNewQueryImages, handleGetQueryImages, handleGetLikedPhotosId, handleGetUserProfile, handleGetNewLikedImages, handleGetLikedImages, handleGetNewHomePageImages, handleGetHomePageImages, handleLikeButtonClick } from "./handlers/unsplashApi";
import { handleGetToken } from "./handlers/auth";

export default function* rootSaga() {
    yield all([
        yield takeLatest(GET_TOPICS_DATA, handleGetTopics),
        yield takeLatest(GET_TOPIC_IMAGES, handleGetTopicImages),
        yield takeLatest(GET_NEW_TOPIC_IMAGES, handleGetNewTopicImages),
        yield takeLatest(GET_QUERY_IMAGES, handleGetQueryImages),
        yield takeLatest(GET_NEW_QUERY_IMAGES, handleGetNewQueryImages),
        yield takeLatest(GET_TOKEN, handleGetToken),
        yield takeLatest(GET_LIKED_PHOTOS_ID, handleGetLikedPhotosId),
        yield takeLatest(GET_MY_PROFILE, handleGetUserProfile),
        yield takeLatest(GET_NEW_LIKED_IMAGES, handleGetNewLikedImages),
        yield takeLatest(GET_LIKED_IMAGES, handleGetLikedImages),
        yield takeLatest(GET_NEW_HOME_PAGE_IMAGES, handleGetNewHomePageImages),
        yield takeLatest(GET_HOME_PAGE_IMAGES, handleGetHomePageImages),
        yield takeLatest(LIKE_BUTTON_CLICK, handleLikeButtonClick),
    ]);
}
