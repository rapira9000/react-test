import {takeEvery, put, call, select} from "redux-saga/effects";
import {UsersAPI} from "../../api/api";
import {followingInProgress, followUser, USERS__LOAD_FOLLOW} from "../../redux/usersReducer";
import {authTokenSelector} from "../../selectors/auth";

export function* workUserFollowHandler({userId}) {
    const authToken = yield select(authTokenSelector);
    yield put(followingInProgress(true, userId));
    const data = yield call(UsersAPI.followUser, authToken, userId);
    if (!data.errorStatus) {
        yield put(followUser(userId));
    }
    yield put(followingInProgress(false, userId))
}

export function* watchUserFollowHandler() {
    yield takeEvery(USERS__LOAD_FOLLOW, workUserFollowHandler);
}