import { combineReducers } from "redux";
import tabHandler from "./tabHandler";
import topicsDataSetter from "./topicsDataSetter";
import topicsImagesSetter from "./topicImagesSetter";
import queryImagesData from "./queryImagesData";
import authReducer from "./authReducer";

const reducers = combineReducers({
    //changeTheNumber
    tabHandler,
    topicsDataSetter,
    topicsImagesSetter,
    queryImagesData,
    authReducer
});

export default reducers;