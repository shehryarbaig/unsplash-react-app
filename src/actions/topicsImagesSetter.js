import { SET_TOPIC_IMAGES, SET_NEW_TOPIC_IMAGES,GET_TOPIC_IMAGES, GET_NEW_TOPIC_IMAGES } from "./type";

export const setTopicImages = (topicImages) => {
    return {
        type: SET_TOPIC_IMAGES,
        topic: topicImages
    }
}

export const setNewTopicImages = (newTopicImages) => {
    return {
        type: SET_NEW_TOPIC_IMAGES,
        topic: newTopicImages
    }
}

export const getTopicImages = (topic, pageNumber) => {
    return {
        type: GET_TOPIC_IMAGES,
        topic:topic,
        pageNumber: pageNumber
    }
}

export const getNewTopicImages = (topic) => {
    return {
        type: GET_NEW_TOPIC_IMAGES,
        topic:topic
    }
}