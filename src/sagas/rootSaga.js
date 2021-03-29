import {all} from "redux-saga/effects";
import {watchAuthUser} from "./authUser";
import {watchLoadUserToken} from "./authUserToken";
import {watchUserRegistration} from "./userRegistration";
import {watchUserProfile} from "./userProfile/userProfile";
import {watchUpdateUserAvatar} from "./userProfile/updateUserAvatar";
import {watchUpdateUserFields} from "./userProfile/updateUserFields";
import {watchUsersData} from "./usersData/usersData";
import {watchUserFollowHandler} from "./usersData/userFollowHandler";
import {watchUserUnFollowHandler} from "./usersData/userUnFollowHandler";
import {watchCreateNewProfilePost} from "./userProfile/createNewProfilePost";
import {watchLoadProfileUserPost} from "./userProfile/loadProfileUserPost";

export function* rootSaga() {
    yield all([
        // auth
        watchAuthUser(),
        watchLoadUserToken(),
        watchUserRegistration(),
        //user profile
        watchUserProfile(),
        watchUpdateUserAvatar(),
        watchUpdateUserFields(),
        watchCreateNewProfilePost(),
        watchLoadProfileUserPost(),
        //users
        watchUsersData(),
        watchUserFollowHandler(),
        watchUserUnFollowHandler()
    ])
}
