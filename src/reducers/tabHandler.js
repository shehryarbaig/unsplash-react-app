import { CHANGE_TAB, CHANGE_TAB_URL } from "../actions/type";


const INITIAL_STATE = {
    activeTab:0
}

const tabHandler = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_TAB: return {
            ...state,
            activeTab: action.payload.num
        }
        default: return state;
    }
}

export default tabHandler;