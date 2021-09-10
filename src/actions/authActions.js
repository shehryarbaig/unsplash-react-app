import { GET_TOKEN , SET_TOKEN, LOG_OUT_USER} from "./type";

export const getToken = payload => {
  return {
    type: GET_TOKEN,
    payload
  };
};

export const setToken = payload => {
  return {
    type: SET_TOKEN,
    payload
  };
};

export const logOutUser = () => {
  return {
    type: LOG_OUT_USER,
  };
};
