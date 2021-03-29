import {takeEvery, put, call, select} from "redux-saga/effects";
import {PROFILE_LOAD_USER_AVATAR, updateUserAvatar} from "../../redux/profileReducer";
import {authTokenSelector} from "../../selectors/authSelectors";
import {ProfileApi} from "../../api/api";

export function* workUpdateUserAvatar({userAvatar}) {
    const authToken = yield select(authTokenSelector);
    if (userAvatar) {
        const data = yield call(ProfileApi.updateUserProfileAvatar, authToken, userAvatar);
        if (!data.errorStatus) {
            yield put(updateUserAvatar(data.userAvatar));
        }
    }
}

export function* watchUpdateUserAvatar() {
    yield takeEvery(PROFILE_LOAD_USER_AVATAR, workUpdateUserAvatar);
}