import { GET_TOKEN , SET_TOKEN} from "./type";

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
