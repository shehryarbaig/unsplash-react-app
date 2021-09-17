import { createSelector } from "reselect";
import { SET_TOPICS_DATA, SET_TOPIC_DATA } from "../actions/types";

const INITIAL_STATE = {
    topicsData: [],
    topic: {},
}

const topicsDataSetterReducer = (state = INITIAL_STATE, action) => {
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

const topicsDataSetterReducerSelector = createSelector(
    [(state) => state.topicsDataSetterReducer],
    (topicsDataSetterReducer) => topicsDataSetterReducer

) 

export const topicsDataSelector = createSelector(
    [(state) => topicsDataSetterReducerSelector(state)],
    (topicsDataSetterReducer) => topicsDataSetterReducer.topicsData

) 

export default topicsDataSetterReducer;
