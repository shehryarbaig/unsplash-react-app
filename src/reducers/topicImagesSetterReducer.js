import { createSelector } from "reselect";
import { SET_TOPIC_IMAGES, SET_NEW_TOPIC_IMAGES } from "../actions/types";

const INITIAL_STATE = {
    topicImages: {}
}

const topicImagesSetterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TOPIC_IMAGES: return {
            ...state,
            topicImages: {...state.topicImages,...action.payload.topicImages.images},
          }
        case SET_NEW_TOPIC_IMAGES: return {
            ...state,
            topicImages: action.payload.newTopicImages.images,
          }
        default: return state;
    }
}

const topicImagesSetterReducerSelector = createSelector(
  [(state) => state.topicImagesSetterReducer],
  (topicImagesSetterReducer) => topicImagesSetterReducer

) 

export const topicImagesSelector = createSelector(
  [(state) => topicImagesSetterReducerSelector(state)],
  (topicImagesSetterReducer) => topicImagesSetterReducer.topicImages

) 

export default topicImagesSetterReducer;
