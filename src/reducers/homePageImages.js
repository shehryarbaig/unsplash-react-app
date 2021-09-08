import { SET_HOME_PAGE_IMAGES, SET_NEW_HOME_PAGE_IMAGES } from "../actions/type";

const initialState = {
    homePageImages: {}
}

const homePageImages = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_PAGE_IMAGES: return {
            ...state,
            homePageImages: {...state.homePageImages,...action.homePageImages.images},
          }
        case SET_NEW_HOME_PAGE_IMAGES: return {
            ...state,
            homePageImages: action.homePageImages.images,
          }
        default: return state;
    }
}

export const homePageImagesSelector = (state) => state.homePageImages.homePageImages;

export default homePageImages;