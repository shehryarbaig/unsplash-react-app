import { CHANGE_TAB, CHANGE_TAB_URL } from "../type";


const initialState = {
    activeTab:0,
    activeUrl: "https://www.google.com"
}

const tabHandler = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAB: return {
            ...state,
            activeTab: action.payload
        }
        case CHANGE_TAB_URL: return {
            ...state,
            activeUrl: action.payload
        }
        default: return state;
    }
}

export default tabHandler;