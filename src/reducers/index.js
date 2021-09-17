import { combineReducers } from "redux";
import tabHandler from "./tabHandlerReducer";
import topicsDataSetter from "./topicsDataSetterReducer";
import topicsImagesSetter from "./topicImagesSetterReducer";
import queryImagesData from "./queryImagesDataReducer";
import authReducer from "./authReducer";
import photoLikes from "./photoLikesReducer";
import profile from "./profileReducer"
import homePageImages from "./homePageImagesReducer";

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
