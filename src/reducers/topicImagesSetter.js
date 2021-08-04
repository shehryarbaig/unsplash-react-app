import { SET_TOPIC_IMAGES, SET_NEW_TOPIC_IMAGES } from "../type";

const initialState = {
    topicImages: []
}

const topicsImagesSetter = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOPIC_IMAGES: return {
            ...state,
            topicImages: [...state.topicImages,...action.topic]
        }
        case SET_NEW_TOPIC_IMAGES: return {
            ...state,
            topicImages: action.topic
        }
        default: return state;
    }
}

export default topicsImagesSetter;