import {takeEvery, put, call} from "redux-saga/effects";
import {AuthAPI} from "../api/api";
import {AUTH_LOAD_USER_TOKEN, setUserToken} from "../redux/authReducer";
import {workAuthUser} from "./authUser";

export function* workLoadUserToken({userEmail, userPassword}) {
    let data = yield call(AuthAPI.getAuthToken, userEmail, userPassword);
    if (!data.errorStatus) {
        yield put(setUserToken(data.token));
        yield call(workAuthUser, false);
    } else {
        alert('wrong email or password');
    }
}

export function* watchLoadUserToken() {
    yield takeEvery(AUTH_LOAD_USER_TOKEN, workLoadUserToken);
}