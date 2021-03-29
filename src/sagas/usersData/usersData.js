import {takeEvery, put, call, select} from "redux-saga/effects";
import {setTotalUsersCount, setUsers, toggleIsFetching, USERS__LOAD_USERS} from "../../redux/usersReducer";
import {UsersAPI} from "../../api/api";
import {authTokenSelector} from "../../selectors/authSelectors";


export function* workUsersData({currentPage, pageSize}) {
    yield put(toggleIsFetching(true));
    const authToken = yield select(authTokenSelector);
    const data = yield call(UsersAPI.getUsers, authToken, currentPage, pageSize);
    if (!data.errorStatus) {
        yield put(setUsers(data.items));
        yield put(setTotalUsersCount(data.itemsCount));
        yield put(toggleIsFetching(false));
    }
}

export function* watchUsersData() {
    yield takeEvery(USERS__LOAD_USERS, workUsersData);
}