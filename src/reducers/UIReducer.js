import { CHANGE_TAB } from "../actions/types";


const INITIAL_STATE = {
    activeTab:0
}

const UIReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_TAB: return {
            ...state,
            activeTab: action.payload.num
        }
        default: return state;
    }
}

export default UIReducer;
