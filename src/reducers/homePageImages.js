import { SET_HOME_PAGE_IMAGES, SET_NEW_HOME_PAGE_IMAGES } from "../actions/type";

const INITIAL_STATE = {
    homePageImages: {}
}

const homePageImages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_HOME_PAGE_IMAGES: return {
            ...state,
            homePageImages: {...state.homePageImages,...action.payload.images},
          }
        case SET_NEW_HOME_PAGE_IMAGES: return {
            ...state,
            homePageImages: action.payload.images,
          }
        default: return state;
    }
}

export const homePageImagesSelector = (state) => state.homePageImages.homePageImages;

export default homePageImages;