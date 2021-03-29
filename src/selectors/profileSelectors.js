import {profileOptionsValue} from "./profileFormDataOptions";

export const getIsEditInputSelector = (state) => {
  return state.profilePage.isEditInput
};

export const getEditInputValueSelector = (state) => {
    return state.profilePage.editInputValue
};

export const getProfileDataForFormSelector = (state) => {
    const profileData = state.profilePage.userProfile;
    if (profileData) {
        for (const item in profileOptionsValue) {
            profileOptionsValue[item].value = profileData[item] || null;
        }
        return profileOptionsValue;
    }
};

export const userAvatarSelector = (state) => {
    return state.profilePage.userProfile.userAvatar || null;
};

export const avatarUrlSelector = (state) => {
  return state.profilePage.userProfile.userAvatar;
};

export const newPostTextSelector = (state) => (state.profilePage.newPostText);
export const profileUserPostsSelector = (state) => (state.profilePage.posts);
export const profileUserPostsLoadingSelector = (state) => (state.profilePage.userPostsLoading);
export const profileUserPagePostsSelector = (state) => (state.profilePage.pagePosts);
export const profileUserMaxPagePostsSelector = (state) => (state.profilePage.maxPagePosts);
export const profileUserLimitPostsSelector = (state) => (state.profilePage.limitPosts);
export const profileUserBtnPostsLoading = (state) => (state.profilePage.btnPostsLoading);
export const profileInputFieldUpdatingSelector = (state) => (state.profilePage.inputFieldUpdating);
