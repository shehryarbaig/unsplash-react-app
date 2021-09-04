import { combineReducers } from "redux";
import tabHandler from "./tabHandler";
import topicsDataSetter from "./topicsDataSetter";
import topicsImagesSetter from "./topicImagesSetter";
import queryImagesData from "./queryImagesData";
import authReducer from "./authReducer";
import photoLikes from "./photoLikes";
import profile from "./profile"
import homePageImages from "./homePageImages";

const reducers = combineReducers({
    tabHandler,
    topicsDataSetter,
    topicsImagesSetter,
    queryImagesData,
    authReducer,
    photoLikes,
    profile,
    homePageImages
});

export default reducers;