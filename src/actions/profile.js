import { SET_MY_PROFILE, GET_MY_PROFILE } from "./type"

export const setUserProfile = (profile) => {
    return {
        type: SET_MY_PROFILE,
        payload: {profile}
    }
}

export const getUserProfile = (accessToken, tokenType) => {
    return {
        type: GET_MY_PROFILE,
        payload:{
            accessToken,
            tokenType
        }
    }
}
