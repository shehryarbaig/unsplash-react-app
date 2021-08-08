import { combineReducers } from "redux";
import tabHandler from "./tabHandler";
import topicsDataSetter from "./topicsDataSetter";
import topicsImagesSetter from "./topicImagesSetter";
import queryImagesData from "./queryImagesData";

const reducers = combineReducers({
    //changeTheNumber
    tabHandler,
    topicsDataSetter,
    topicsImagesSetter,
    queryImagesData
});

export default reducers;