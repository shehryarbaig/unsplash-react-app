import { SET_MY_PROFILE } from "../type";


const initialState = {
    userProfile: {}
}

const profile = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_PROFILE: return {
                ...state,
                userProfile: action.profile
            }
        default: return state;
    }
}

export default profile;