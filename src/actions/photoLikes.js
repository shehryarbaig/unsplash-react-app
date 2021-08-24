import { SET_LIKED_PHOTOS_ID, GET_LIKED_PHOTOS_ID } from "../type";

export const setLikedPhotosId = (likedPhotosData) => {
    return {
        type: SET_LIKED_PHOTOS_ID,
        likedPhotosData: likedPhotosData,
    }
}

export const getLikedPhotosId = (accessToken, tokenType) => {
    return {
        type: GET_LIKED_PHOTOS_ID,
        accessToken:accessToken,
        tokenType:tokenType
    }
}