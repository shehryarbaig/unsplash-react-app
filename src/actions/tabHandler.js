import { CHANGE_TAB, CHANGE_TAB_URL } from "../type";

export const changeActiveTab = (num) => {
    return {
        type: CHANGE_TAB,
        payload: num
    }
}

export const changeActiveTabUrl = (url) => {
    return {
        type: CHANGE_TAB_URL,
        payload: url
    }
}