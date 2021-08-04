import { SET_TOPICS_DATA, GET_TOPICS_DATA ,SET_TOPIC_DATA } from "../type";

export const setTopicsData = (topicsData) => {
    return {
        type: SET_TOPICS_DATA,
        payload: topicsData
    }
}

export const getTopicsData = () => {
    return {
        type: GET_TOPICS_DATA
    }
}

export const setTopic = (topic) => {
    return {
        type: SET_TOPIC_DATA,
        payload: topic
    }
}