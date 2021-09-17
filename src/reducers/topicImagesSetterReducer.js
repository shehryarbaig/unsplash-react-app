import { createSelector } from "reselect";
import { SET_TOPIC_IMAGES, SET_NEW_TOPIC_IMAGES } from "../actions/types";

const INITIAL_STATE = {
    topicImages: {}
}

const topicsImagesSetter = (state = INITIAL_STATE, action) => {
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

export const topicImagesSelector = createSelector(
  [(state) => state.topicsImagesSetter.topicImages],
  (topicImages) => topicImages

) 

export default topicsImagesSetter;
