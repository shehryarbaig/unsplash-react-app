import { SET_TOPICS_DATA, SET_TOPIC_DATA } from "../actions/type";

const initialState = {
    topicsData: [],
    topic: {},
}

const topicsDataSetter = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOPICS_DATA: return {
            ...state,
            topicsData: action.payload
        }
        case SET_TOPIC_DATA: return {
            ...state,
            topic: action.payload
        }
        default: return state;
    }
}

export const topicsDataSelector = (state) => state.topicsDataSetter.topicsData;

export default topicsDataSetter;