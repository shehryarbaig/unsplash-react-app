import { SET_TOKEN } from "../actions/type";

const INITIAL_STATE = {
  accessToken: null,
  token_type: null,
  scope: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TOKEN:
      const data = action.payload;
      return {
        ...state,
        accessToken: data.access_token,
        token_type: data.token_type,
        scope: data.scope,
      };
    default:
      return state;
  }
};

export default authReducer;
