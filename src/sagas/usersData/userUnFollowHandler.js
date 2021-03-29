import {takeEvery, put, call, select} from "redux-saga/effects";
import {UsersAPI} from "../../api/api";
import {followingInProgress, unFollowUser, USERS__LOAD_UNFOLLOW} from "../../redux/usersReducer";
import {authTokenSelector} from "../../selectors/authSelectors";

export function* workUserUnFollowHandler({userId}) {
    const authToken = yield select(authTokenSelector);
    yield put(followingInProgress(true, userId));
    const data = yield call(UsersAPI.unFollowUser, authToken, userId);
    if (!data.errorStatus) {
        yield put(unFollowUser(userId));
    }
    yield put(followingInProgress(false, userId))
}

export function* watchUserUnFollowHandler() {
    yield takeEvery(USERS__LOAD_UNFOLLOW, workUserUnFollowHandler);
}