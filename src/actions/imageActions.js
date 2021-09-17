import { GET_IMAGE } from "./types"


export const getImage = (url, fileName) => {
    return {
        type: GET_IMAGE,
        payload:{
            url,
            fileName
        }
    }
}