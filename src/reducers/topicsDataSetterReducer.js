import { createSelector } from "reselect";
import { SET_TOPICS_DATA, SET_TOPIC_DATA } from "../actions/types";

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

export const topicsDataSelector = createSelector(
    [(state) => state.topicsDataSetter.topicsData],
    (topicsData) => topicsData

) 

export default topicsDataSetter;
