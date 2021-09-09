import { SET_LIKED_PHOTOS_ID, SET_LIKED_IMAGES, SET_NEW_LIKED_IMAGES } from "../actions/type";

const initialState = {
    likedPhotosId: [],
    likedImages:{}
}

const photoLikes = (state = initialState, action) => {
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

export const likedImagesSelector = (state) => state.photoLikes.likedImages;

export default photoLikes;