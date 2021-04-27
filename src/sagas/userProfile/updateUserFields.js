import {takeEvery, put, call, select} from "redux-saga/effects";
import {PROFILE_UPDATE_USER_FIELD, profileInputFieldUpdating} from "../../redux/profileReducer";
import {authTokenSelector} from "../../selectors/auth";
import {ProfileApi} from "../../api/api";
import {toggleFieldUpdating} from "../../utils/helpers";
import {profileInputFieldUpdatingSelector} from "../../selectors/profile";

export function* workUpdateUserFields({userField, fieldValue}) {
    const authToken = yield select(authTokenSelector);
    if (authToken) {
        const data = yield call(ProfileApi.updateUserProfileFiled, authToken, userField, fieldValue);
        if (!data.errorStatus) {
            const inputFieldUpdating = yield select(profileInputFieldUpdatingSelector);
            yield  put(profileInputFieldUpdating(toggleFieldUpdating(true, userField, inputFieldUpdating)));
        } else {
            alert(data.errorStatus);
        }
    }
}

export function* watchUpdateUserFields() {
    yield takeEvery(PROFILE_UPDATE_USER_FIELD, workUpdateUserFields);
}