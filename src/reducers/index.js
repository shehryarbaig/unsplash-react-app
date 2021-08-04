import { combineReducers } from "redux";
import tabHandler from "./tabHandler";
import topicsDataSetter from "./topicsDataSetter";
import topicsImagesSetter from "./topicImagesSetter";

const reducers = combineReducers({
    //changeTheNumber
    tabHandler,
    topicsDataSetter,
    topicsImagesSetter
});

export default reducers;