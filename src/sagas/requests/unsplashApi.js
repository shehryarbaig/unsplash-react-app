import axios from "axios";
import { ACCESS_ID } from "../../config";

export function requestGetTopics() {
    return axios.request({
        method: 'get',
        url: `https://api.unsplash.com/topics/?per_page=30&client_id=${ACCESS_ID}`
    });
}

export function requestGetTopicImages(topic, imagesCurrrentCount) {
    return axios.request({
        method: 'get',
        url: `https://api.unsplash.com/topics/${topic}/photos/?page=${imagesCurrrentCount}&client_id=${ACCESS_ID}`
    });
}