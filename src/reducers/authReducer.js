import { SET_TOKEN } from "../actions/types";
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

const authReducerSelector = createSelector(
  [state => state.authReducer],
  (authReducer) => authReducer
);

export const accessTokenSelector = createSelector(
  [state => authReducerSelector(state)],
  (authReducer) => authReducer.accessToken
);

export const tokenTypeSelector = createSelector(
  [state => authReducerSelector(state)],
  (authReducer) => authReducer.token_type
);


export default authReducer;
