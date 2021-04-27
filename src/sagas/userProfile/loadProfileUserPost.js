import {takeEvery, put, call, select} from "redux-saga/effects";
import {
    getProfileUserPosts,
    PROFILE__LOAD_USER_POSTS,
    profileBtnUserPostsLoading,
    profileChangePagePostsNumber,
    profileSetMaxPagePostsUser,
    profileSetUserCountPosts,
    profileUserPostsLoading
} from "../../redux/profileReducer";
import {authTokenSelector} from "../../selectors/auth";
import {ProfileApi} from "../../api/api";
import {profileUserLimitPostsSelector, profileUserPagePostsSelector} from "../../selectors/profile";

export function* workLoadProfileUserPost() {
    yield put(profileChangePagePostsNumber());
    yield put(profileBtnUserPostsLoading(true));

    const authToken = yield select(authTokenSelector);
    const pagePosts = yield select(profileUserPagePostsSelector);
    const limitPosts = yield select(profileUserLimitPostsSelector);
    const data = yield call(ProfileApi.getProfilePosts, authToken, pagePosts, limitPosts);
    if (!data.errorStatus) {
        yield put(getProfileUserPosts(data.posts));
        yield put(profileSetUserCountPosts(data.countPosts));
        yield put(profileUserPostsLoading(true));

        const maxPagePosts = yield Math.ceil(+data.countPosts / +limitPosts);
        yield put(profileSetMaxPagePostsUser(maxPagePosts));
        yield put(profileBtnUserPostsLoading(false));
    } else {
        alert (data.errorStatus);
    }
}

export function* watchLoadProfileUserPost() {
    yield takeEvery(PROFILE__LOAD_USER_POSTS, workLoadProfileUserPost);
}