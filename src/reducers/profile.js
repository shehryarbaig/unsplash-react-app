import { createSelector } from "reselect";
import { SET_MY_PROFILE } from "../actions/type";


const INITIAL_STATE = {
    userProfile: {}
}

const profile = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MY_PROFILE: return {
                ...state,
                userProfile: action.payload.profile
            }
        default: return state;
    }
}

//export const userLikesUrlSelector = (state) => state.profile.userProfile? state.profile.userProfile.links.likes:null;
//export const userTotalLikesSelector = (state) => state.profile.userProfile? state.profile.userProfile.total_likes:null;
export const userProfileSelector = createSelector(
    [(state) => state.profile.userProfile],
    (userProfile) => userProfile
) 

export default profile;
