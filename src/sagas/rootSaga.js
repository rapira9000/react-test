import {all} from "redux-saga/effects";
import {watchAuthUser} from "./authUser";
import {watchLoadUserToken} from "./authUserToken";
import {watchUserRegistration} from "./userRegistration";
import {watchUserProfile} from "./userProfile/userProfile";
import {watchUpdateUserAvatar} from "./userProfile/updateUserAvatar";
import {watchUpdateUserFields} from "./userProfile/updateUserFields";
import {watchUserFollowHandler} from "./usersData/userFollowHandler";
import {watchUserUnFollowHandler} from "./usersData/userUnFollowHandler";
import {watchCreateNewProfilePost} from "./userProfile/createNewProfilePost";
import {watchLoadProfileUserPost} from "./userProfile/loadProfileUserPost";
import {watchLikePost} from "./likePost";
import {watchPosts} from "./posts";

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
        watchUserFollowHandler(),
        watchUserUnFollowHandler(),
        // like
        watchLikePost(),
        // posts
        watchPosts(),
    ])
}
