import { SET_TOKEN } from "../type";

const initialState = {
  accessToken: null,
  token_type: null,
  scope: null,
};

const authReducer = (state = initialState, action) => {
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
