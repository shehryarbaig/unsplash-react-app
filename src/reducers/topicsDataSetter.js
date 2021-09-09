import { SET_TOPICS_DATA, SET_TOPIC_DATA } from "../actions/type";

const INITIAL_STATE = {
    topicsData: [],
    topic: {},
}

const topicsDataSetter = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TOPICS_DATA: return {
            ...state,
            topicsData: action.payload.topicsData
        }
        case SET_TOPIC_DATA: return {
            ...state,
            topic: action.payload.topic
        }
        default: return state;
    }
}

export const topicsDataSelector = (state) => state.topicsDataSetter.topicsData;

export default topicsDataSetter;