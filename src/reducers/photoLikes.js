import { SET_LIKED_PHOTOS_ID } from "../type";

const initialState = {
    likedPhotosId: []
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
             
        
        default: return state;
    }
}

export default photoLikes;