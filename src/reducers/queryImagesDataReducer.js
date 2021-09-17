import { createSelector } from "reselect";
import { SET_QUERY_IMAGES, SET_NEW_QUERY_IMAGES, SET_QUERY } from "../actions/types";

const INITIAL_STATE = {
    query: "",
    queryImages: {}
}

const queryImagesData = (state = INITIAL_STATE, action) => {
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

export const queryImagesSelector = createSelector(
    [(state) => state.queryImagesData.queryImages],
    (queryImages) => queryImages

)

export const querySelector = createSelector(
    [(state) => state.queryImagesData.query],
    (query) => query
) 

export default queryImagesData;
