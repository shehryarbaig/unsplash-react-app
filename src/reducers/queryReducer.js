import { createSelector } from "reselect";
import { SET_QUERY_IMAGES, SET_NEW_QUERY_IMAGES, SET_QUERY } from "../actions/types";

const INITIAL_STATE = {
    query: "",
    queryImages: {}
}

const queryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_QUERY: return {
            ...state,
            query: action.payload.query
        }
        case SET_QUERY_IMAGES: return {
            ...state,
            queryImages: {...state.queryImages,...action.payload.queryImages.images}
        }
        case SET_NEW_QUERY_IMAGES: return {
            ...state,
            queryImages: action.payload.queryImages.images
        }
        default: return state;
    }
}

const queryReducerSelector = createSelector(
    [(state) => state.queryReducer],
    (queryReducer) => queryReducer

)

export const queryImagesSelector = createSelector(
    [(state) => queryReducerSelector(state)],
    (queryReducer) => queryReducer.queryImages

)

export const querySelector = createSelector(
    [(state) => queryReducerSelector(state)],
    (queryReducer) => queryReducer.query
) 

export default queryReducer;
