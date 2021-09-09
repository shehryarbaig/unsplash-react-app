import { CHANGE_TAB, CHANGE_TAB_URL } from "../actions/type";


const initialState = {
    activeTab:0
}

const tabHandler = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAB: return {
            ...state,
            activeTab: action.payload
        }
        default: return state;
    }
}

export default tabHandler;