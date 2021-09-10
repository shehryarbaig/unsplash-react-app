import { SET_TOKEN } from "../actions/type";
import { createSelector } from "reselect";

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

export const accessTokenSelector = createSelector(
  [state => state.authReducer.accessToken],
  (accessToken) => accessToken
);
export const tokenTypeSelector = createSelector(
  [state => state.authReducer.token_type],
  (tokenType) => tokenType
);

export default authReducer;
