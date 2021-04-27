import {takeEvery, call, put, select} from "redux-saga/effects";
import {PROFILE_USER_LOAD_DATA, setProfileUserData} from "../../redux/profileReducer";
import {ProfileApi} from "../../api/api";
import {authTokenSelector} from "../../selectors/auth";

function* workUserProfile({userId}) {
    const authToken = yield select(authTokenSelector);
    const data = yield call(ProfileApi.getUserProfileData, authToken, userId);
    if (!data.errorStatus) {
        yield put(setProfileUserData(data.profileData));
    }
}

export function* watchUserProfile() {
    yield takeEvery(PROFILE_USER_LOAD_DATA, workUserProfile);
}