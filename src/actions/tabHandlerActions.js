import { CHANGE_TAB } from "./type";

export const changeActiveTab = (num) => {
    return {
        type: CHANGE_TAB,
        payload: {num}
    }
}
