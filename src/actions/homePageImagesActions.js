import { SET_NEW_HOME_PAGE_IMAGES, SET_HOME_PAGE_IMAGES, GET_HOME_PAGE_IMAGES, GET_NEW_HOME_PAGE_IMAGES } from "./types"

export const setHomePageImages = (images) => {
    return {
        type: SET_HOME_PAGE_IMAGES,
        payload: images
    }
}

export const setNewHomePageImages = (newImages) => {
    return {
        type: SET_NEW_HOME_PAGE_IMAGES,
        payload: newImages
    }
}

export const getHomePageImages = (pageNumber) => {
    return {
        type: GET_HOME_PAGE_IMAGES,
        payload: {pageNumber}
    }
}

export const getNewHomePageImages = () => {
    return {
        type: GET_NEW_HOME_PAGE_IMAGES,
    }
}
