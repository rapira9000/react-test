import {takeEvery, put, call, select} from "redux-saga/effects";
import {
    addNewPostUserProfile,
    PROFILE__CREATE_NEW_POST_TEXT,
    profileUserPostsLoading
} from "../../redux/profileReducer";
import {authTokenSelector} from "../../selectors/auth";
import {newPostTextSelector} from "../../selectors/profile";
import {ProfileApi} from "../../api/api";

export function* workCreateNewProfilePost() {
    yield put(profileUserPostsLoading(false));
    const authToken = yield select(authTokenSelector);
    const newPostText = yield select(newPostTextSelector);
    const data = yield call(ProfileApi.createNewPost, authToken, newPostText);
    if (!data.errorStatus) {
        yield put(addNewPostUserProfile(newPostText, data.postId));
        yield put(profileUserPostsLoading(true));
    } else {
        yield alert(data.errorStatus);
    }
}

export function* watchCreateNewProfilePost() {
    yield takeEvery(PROFILE__CREATE_NEW_POST_TEXT, workCreateNewProfilePost);
}