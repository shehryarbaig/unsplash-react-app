import { SET_TOPIC_IMAGES, SET_NEW_TOPIC_IMAGES,GET_TOPIC_IMAGES, GET_NEW_TOPIC_IMAGES } from "./type";

export const setTopicImages = (topicImages) => {
    return {
        type: SET_TOPIC_IMAGES,
        payload: {topicImages}
    }
}

export const setNewTopicImages = (newTopicImages) => {
    return {
        type: SET_NEW_TOPIC_IMAGES,
        payload: {newTopicImages}
    }
}

export const getTopicImages = (topic, pageNumber) => {
    return {
        type: GET_TOPIC_IMAGES,
        payload:{
            topic,
            pageNumber
        }
    }
}

export const getNewTopicImages = (topic) => {
    return {
        type: GET_NEW_TOPIC_IMAGES,
        payload:{
            topic
        }
    }
}