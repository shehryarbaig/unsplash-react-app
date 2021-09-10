import { call, put } from "redux-saga/effects";
import { setLikedPhotosId, setToken } from "../../actions";
import { requestGetToken } from "../requests/auth";

export function* handleGetToken(action) {
  try {
    const response = yield call(requestGetToken, action.payload);
    yield put(setToken(response));
  } catch (error) {
    console.log(error);
  }
}

export function* handleLogOut(){
  try
  {
      yield put(setToken({
          access_token:null,
          token_type:null,
          scope: null
        }));
        localStorage.removeItem("tokenConfig");
        yield put(setLikedPhotosId([],1));
  }
  catch(error)
  {
      console.log(error);
  }
}
