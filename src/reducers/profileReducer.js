import { createSelector } from "reselect";
import { SET_MY_PROFILE } from "../actions/types";


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

const profileSelector = createSelector(
    [(state) => state.profile],
    (Profile) => Profile
) 
export const userProfileSelector = createSelector(
    [(state) => profileSelector(state)],
    (profile) => profile.userProfile
) 

export default profile;
