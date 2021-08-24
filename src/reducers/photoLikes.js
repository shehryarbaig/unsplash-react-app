import { SET_LIKED_PHOTOS_ID } from "../type";

const initialState = {
    likedPhotosId: []
}

const photoLikes = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIKED_PHOTOS_ID: return {
            ...state,
            likedPhotosId: [...state.likedPhotosId, ...(action.likedPhotosData.filter(photo => !state.likedPhotosId.includes(photo.id))).map(photo=>photo.id)]
        }
        
        default: return state;
    }
}

export default photoLikes;