import axios from "axios";
import { ACCESS_ID } from "../../config";

export function requestGetTopics() {
    return axios.request({
        method: 'get',
        url: `https://api.unsplash.com/topics/?per_page=30&client_id=${ACCESS_ID}`
    });
}

export function requestGetTopicImages(topic, pageNumber) {
    return axios.request({
        method: 'get',
        url: `https://api.unsplash.com/topics/${topic}/photos/?page=${pageNumber}&client_id=${ACCESS_ID}`
    });
}

export function requestGetHomePageImages(pageNumber) {
    return axios.request({
        method: 'get',
        url: `https://api.unsplash.com/photos/random?count=10&page=${pageNumber}&client_id=${ACCESS_ID}`
    });
}

export function requestGetQueryImages(query, pageNumber) {
    return axios.request({
        method: 'get',
        url: `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${query}&client_id=${ACCESS_ID}`
    });
}

export function requestGetUserProfile(accessToken, tokenType) {
    return axios.request({
        method: 'get',
        headers: {
          Authorization: `${tokenType} ${accessToken}`
        },
        url: `https://api.unsplash.com/me`
      })
}


export function requestGetLikedPhotos(url,accessToken, tokenType, pageNumber) {
    return axios.request({
        method: 'get',
        headers: {
            Authorization: `${tokenType} ${accessToken}`
        },
        url: `${url}?page=${pageNumber}`
      })
}
