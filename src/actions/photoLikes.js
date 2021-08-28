import { SET_LIKED_PHOTOS_ID, GET_LIKED_PHOTOS_ID } from "../type";

export const setLikedPhotosId = (likedPhotosData, page) => {
    return {
        type: SET_LIKED_PHOTOS_ID,
        likedPhotosData: likedPhotosData,
        page:page
    }
}

export const getLikedPhotosId = (accessToken, tokenType) => {
    return {
        type: GET_LIKED_PHOTOS_ID,
        accessToken:accessToken,
        tokenType:tokenType
    }
}