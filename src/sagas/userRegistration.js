import {takeEvery, call} from "redux-saga/effects";
import {UserRegisterApi} from "../api/api";
import {AUTH_LOAD_USER_REGISTRATION} from "../redux/authReducer";
import {workLoadUserToken} from "./authUserToken";

function* workUserRegistration({userName, userEmail, userPassword}) {
    const data = yield call(UserRegisterApi.registerNewUser, userName, userEmail, userPassword);
    if (!data.errorStatus) {
        yield call(workLoadUserToken, {userEmail, userPassword});
    } else {
        yield alert(data.errorStatus);
    }
}

export function* watchUserRegistration() {
    yield takeEvery(AUTH_LOAD_USER_REGISTRATION, workUserRegistration);
}