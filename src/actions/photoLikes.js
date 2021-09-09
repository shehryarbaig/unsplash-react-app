import { SET_LIKED_PHOTOS_ID, GET_LIKED_PHOTOS_ID, SET_LIKED_IMAGES, SET_NEW_LIKED_IMAGES, GET_LIKED_IMAGES, GET_NEW_LIKED_IMAGES } from "./type";

export const setLikedPhotosId = (likedPhotosData, page) => {
    return {
        type: SET_LIKED_PHOTOS_ID,
        payload: {
            likedPhotosData,
            page
        }
    }
}

export const getLikedPhotosId = (likesUrl,totalLikes,accessToken, tokenType) => {
    return {
        type: GET_LIKED_PHOTOS_ID,
        payload:{
            accessToken,
            tokenType,
            likesUrl,
            totalLikes
        }
    }
}

export const setLikedImages = (images) => {
    return {
        type: SET_LIKED_IMAGES,
        payload:{
            likedImages: images
            
        }
    }
}

export const setNewLikedImages = (newLikedImages) => {
    return {
        type: SET_NEW_LIKED_IMAGES,
        payload:{
            likedImages: newLikedImages
            
        }
    }
}

export const getLikedImages = (likesUrl, pageNumber, accessToken,tokenType) => {
    return {
        type: GET_LIKED_IMAGES,
        payload:{
            likesUrl,
            pageNumber,
            accessToken,
            tokenType,
            
        }
    }
}

export const getNewLikedImages = (likesUrl, accessToken,tokenType) => {
    return {
        type: GET_NEW_LIKED_IMAGES,
        payload:{
            likesUrl,
            accessToken,
            tokenType,
            
        }
    }
}