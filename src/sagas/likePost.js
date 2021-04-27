import {POSTS__LIKE} from "../redux/postsReducer";
import {takeEvery, put, call, select} from "redux-saga/effects";
import {authTokenSelector} from "../selectors/auth";
import {Like} from "../api/api";
import {postsToggleLikeFetching, postsUpdateLike} from "../redux/postsReducer";

export function* workLikePost({postId}) {
    const authToken = yield select(authTokenSelector);
    const data = yield call(Like.toggleLike, authToken, postId);
    if (!data.errorStatus) {
        yield put(postsUpdateLike(data.post));
        yield put(postsToggleLikeFetching(postId));
    } else {
        alert(data.message);
    }

}

export function* watchLikePost() {
    yield takeEvery(POSTS__LIKE, workLikePost);
}


