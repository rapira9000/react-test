import {takeEvery, put, call, select} from "redux-saga/effects";
import {authTokenSelector} from "../selectors/auth";
import {
    POSTS__LOAD_POSTS,
    postsSetMaxPagesLimit,
    postsToggleLoading,
} from "../redux/postsReducer";
import {postsGetLimitSelector, postsGetPageSelector} from "../selectors/posts";
import {setterByKeyStore} from "./setterByKeyStore";

export function* workPosts({apiFun, setByKeyStore}) {
    yield put(postsToggleLoading());
    const authToken = yield select(authTokenSelector);
    const page = yield select(postsGetPageSelector);
    const limit = yield select(postsGetLimitSelector);
    const data = yield call(apiFun, authToken, page, limit);

    if (!data.errorStatus) {
        yield put(postsSetMaxPagesLimit(data.itemsCount));
        yield put(setterByKeyStore[setByKeyStore](data.items));
        yield put(postsToggleLoading());
    } else {
        alert(data.errorStatus);
    }
}

export function* watchPosts() {
    yield takeEvery(POSTS__LOAD_POSTS, workPosts);
}