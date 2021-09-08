import { SET_QUERY_IMAGES, SET_NEW_QUERY_IMAGES, GET_QUERY_IMAGES, GET_NEW_QUERY_IMAGES, SET_QUERY } from "./type"

export const setQuery = (query) => {
    return {
        type: SET_QUERY,
        query: query
    }
}

export const setQueryImages = (queryImages) => {
    return {
        type: SET_QUERY_IMAGES,
        queryImages: queryImages
    }
}


export const setNewQueryImages = (queryImages) => {
    return {
        type: SET_NEW_QUERY_IMAGES,
        queryImages: queryImages
    }
}


export const getQueryImages = (searchQuery, pageNumber) => {
    return {
        type: GET_QUERY_IMAGES,
        searchQuery:searchQuery,
        pageNumber:pageNumber
    }
}

export const getNewQueryImages = (searchQuery) => {
    return {
        type: GET_NEW_QUERY_IMAGES,
        searchQuery:searchQuery
    }
}