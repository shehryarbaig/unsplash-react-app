import { SET_MY_PROFILE } from "../actions/type";


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

export const userLikesUrlSelector = (state) => state.profile.userProfile? state.profile.userProfile.links.likes:null;
export const userTotalLikesSelector = (state) => state.profile.userProfile? state.profile.userProfile.total_likes:null;
export const userProfileSelector = (state) => state.profile.userProfile;

export default profile;