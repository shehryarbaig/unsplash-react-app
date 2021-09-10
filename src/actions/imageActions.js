import { GET_IMAGE } from "./type"


export const getImage = (url, fileName) => {
    return {
        type: GET_IMAGE,
        payload:{
            url,
            fileName
        }
    }
}