import { SET_QUERY_IMAGES, SET_NEW_QUERY_IMAGES, SET_QUERY } from "../type";

const initialState = {
    query: "",
    queryImages: {}
}

const queryImagesData = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY: return {
            ...state,
            query: action.query
        }
        case SET_QUERY_IMAGES: return {
            ...state,
            queryImages: {...state.queryImages,...action.queryImages.images}
        }
        case SET_NEW_QUERY_IMAGES: return {
            ...state,
            queryImages: action.queryImages.images
        }
        default: return state;
    }
}

export default queryImagesData;