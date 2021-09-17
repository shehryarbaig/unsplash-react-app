import { createSelector } from "reselect";
import { SET_LIKED_PHOTOS_ID, SET_LIKED_IMAGES, SET_NEW_LIKED_IMAGES } from "../actions/types";

const INITIAL_STATE = {
    likedPhotosId: [],
    likedImages:{}
}

const photoLikesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LIKED_PHOTOS_ID:
            switch(action.payload.page) {
                case 1:return {
                    ...state,
                    likedPhotosId: [...action.payload.likedPhotosData.map(photo=>photo.id)]
                }
                default: return {
                    ...state,
                    likedPhotosId: [...state.likedPhotosId, ...action.payload.likedPhotosData.map(photo=>photo.id)]
                } 
            }
        case SET_LIKED_IMAGES: return {
            ...state,
            likedImages: {...state.likedImages,...action.payload.likedImages.images},
            }
        case SET_NEW_LIKED_IMAGES: return {
            ...state,
            likedImages: action.payload.likedImages.images,
            }
             
        
        default: return state;
    }
}

const photoLikesReducerSelector = createSelector(
    [state => state.photoLikesReducer],
    (photoLikesReducer) => photoLikesReducer
) 

export const likedImagesSelector = createSelector(
    [state => photoLikesReducerSelector(state)],
    (photoLikesReducer) => photoLikesReducer.likedImages
) 
export const likedPhotosIdSelector = createSelector(
    [(state) => photoLikesReducerSelector(state)],
    (photoLikesReducer) => photoLikesReducer.likedPhotosId
) 

export default photoLikesReducer;
