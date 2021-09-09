import { SET_TOPIC_IMAGES, SET_NEW_TOPIC_IMAGES } from "../actions/type";

const initialState = {
    topicImages: {}
}

const topicsImagesSetter = (state = initialState, action) => {
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

export const topicImagesSelector = (state) => state.topicsImagesSetter.topicImages;

export default topicsImagesSetter;