import { SET_MY_PROFILE, GET_MY_PROFILE } from "./type"

export const setUserProfile = (profile) => {
    return {
        type: SET_MY_PROFILE,
        profile: profile
    }
}

export const getUserProfile = (accessToken, tokenType) => {
    return {
        type: GET_MY_PROFILE,
        accessToken:accessToken,
        tokenType:tokenType
    }
}