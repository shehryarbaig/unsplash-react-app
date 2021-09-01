import { SET_LIKED_PHOTOS_ID, SET_LIKED_IMAGES, SET_NEW_LIKED_IMAGES } from "../type";

const initialState = {
    likedPhotosId: [],
    likedImages:{}
}

const photoLikes = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIKED_PHOTOS_ID:
            switch(action.page) {
                case 1:return {
                    ...state,
                    likedPhotosId: [...action.likedPhotosData.map(photo=>photo.id)]
                }
                default: return {
                    ...state,
                    likedPhotosId: [...state.likedPhotosId, ...action.likedPhotosData.map(photo=>photo.id)]
                } 
            }
        case SET_LIKED_IMAGES: return {
            ...state,
            likedImages: {...state.likedImages,...action.likedImages.images},
            }
        case SET_NEW_LIKED_IMAGES: return {
            ...state,
            likedImages: action.likedImages.images,
            }
             
        
        default: return state;
    }
}

export default photoLikes;