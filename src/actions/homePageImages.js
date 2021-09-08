import { SET_NEW_HOME_PAGE_IMAGES, SET_HOME_PAGE_IMAGES, GET_HOME_PAGE_IMAGES, GET_NEW_HOME_PAGE_IMAGES } from "./type"

export const setHomePageImages = (images) => {
    return {
        type: SET_HOME_PAGE_IMAGES,
        homePageImages: images
    }
}

export const setNewHomePageImages = (newImages) => {
    return {
        type: SET_NEW_HOME_PAGE_IMAGES,
        homePageImages: newImages
    }
}

export const getHomePageImages = (pageNumber) => {
    return {
        type: GET_HOME_PAGE_IMAGES,
        pageNumber: pageNumber
    }
}

export const getNewHomePageImages = () => {
    return {
        type: GET_NEW_HOME_PAGE_IMAGES,
    }
}