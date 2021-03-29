import {takeEvery, put, call, select} from "redux-saga/effects";
import {
    AUTH__LOAD_USER_DATA,
    setAuthStatus,
    setUserData,
    setUserDataFetching,
    setUserToken
} from "../redux/authReducer";
import {AuthAPI} from "../api/api";
import {authTokenSelector} from "../selectors/authSelectors";

export function* workAuthUser(setToken = true) {
    let authToken = yield select(authTokenSelector);
    if (setToken) {
        yield put(setUserToken(authToken));
    }

    if (authToken) {
        const data = yield call(AuthAPI.getUserData, authToken);
        if (!data.errorStatus) {
            yield put(setUserData(data));
            yield put(setAuthStatus(true));
        }
    }
    yield put(setUserDataFetching(true));
}

export function* watchAuthUser() {
    yield takeEvery(AUTH__LOAD_USER_DATA, workAuthUser);
}