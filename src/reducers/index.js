import { combineReducers } from "redux";
import UIReducer from "./UIReducer";
import topicsDataSetterReducer from "./topicsDataSetterReducer";
import topicImagesSetterReducer from "./topicImagesSetterReducer";
import queryReducer from "./queryReducer";
import authReducer from "./authReducer";
import photoLikesReducer from "./photoLikesReducer";
import profileReducer from "./profileReducer"
import homePageReducer from "./homePageReducer";

const reducers = combineReducers({
    UIReducer,
    topicsDataSetterReducer,
    topicImagesSetterReducer,
    queryReducer,
    authReducer,
    photoLikesReducer,
    profileReducer,
    homePageReducer
});

export default reducers;
