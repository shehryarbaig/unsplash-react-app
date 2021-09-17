import { CHANGE_TAB } from "./types";

export const changeActiveTab = (num) => {
    return {
        type: CHANGE_TAB,
        payload: {num}
    }
}
