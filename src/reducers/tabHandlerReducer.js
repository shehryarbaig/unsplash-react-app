import { CHANGE_TAB } from "../actions/type";


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
