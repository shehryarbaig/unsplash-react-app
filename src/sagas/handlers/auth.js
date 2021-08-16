import { call, put } from "redux-saga/effects";
import { setToken } from "../../actions";
import { requestGetToken } from "../requests/auth";

export function* handleGetToken(action) {
  try {
    const response = yield call(requestGetToken, action.payload);
    yield put(setToken(response));
  } catch (error) {
    console.log(error);
  }
}
