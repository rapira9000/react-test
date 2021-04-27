const PROFILE__NEW_POST_TEXT = `PROFILE__NEW_POST_TEXT`;
const PROFILE_UPDATE_USER_DESCRIPTION = `PROFILE_UPDATE_USER_DESCRIPTION`;
const SET_USER_PROFILE_DATA = `SET_USER_PROFILE_DATA`;
const PROFILE_SET_IS_EDIT_INPUT = `PROFILE_SET_IS_EDIT_INPUT`;
const PROFILE_SET_EDIT_INPUT_VALUE = `PROFILE_SET_EDIT_INPUT_VALUE`;
const PROFILE_UPDATE_USER_AVATAR = `PROFILE_UPDATE_USER_AVATAR`;
export const PROFILE_LOAD_USER_AVATAR = `PROFILE_LOAD_USER_AVATAR`;
export const PROFILE_USER_LOAD_DATA = `PROFILE_USER_LOAD_DATA`;
export const PROFILE_UPDATE_USER_FIELD = `PROFILE_UPDATE_USER_FIELD`;
export const PROFILE__CREATE_NEW_POST_TEXT = `PROFILE__CREATE_NEW_POST_TEXT`;
export const PROFILE__LOAD_USER_POSTS = `PROFILE__LOAD_USER_POSTS`;
export const PROFILE__GET_USER_POSTS = `PROFILE__GET_USER_POSTS`;
export const PROFILE__ADD_NEW_POST_USER = `PROFILE__ADD_NEW_POST_USER`;
export const PROFILE__LOADING_USER_POSTS = `PROFILE__LOADING_USER_POSTS`;
export const PROFILE__SET_USER_COUNT_POSTS = `PROFILE__SET_USER_COUNT_POSTS`;
export const PROFILE_CHANGE_PAGE_POSTS_NUMBER = `PROFILE_CHANGE_PAGE_POSTS_NUMBER`;
export const PROFILE__SET_MAX_PAGE_POSTS_USER = `PROFILE__SET_MAX_PAGE_POSTS_USER`;
export const PROFILE_BTN_POST_LOADING = `PROFILE_BTN_POST_LOADING`;
export const PROFILE_INPUT_FIELD_UPDATING = `PROFILE_INPUT_FIELD_UPDATING`;
export const PROFILE__IS_LIKE_FETCHING = `PROFILE__IS_LIKE_FETCHING`;

let initialState = {
    posts: [],
    countPosts: 0,
    limitPosts: 5,
    pagePosts: 0,
    maxPagePosts: 0,
    userProfile: null,
    isEditInput: false,
    editInputValue: null,
    inputFieldUpdating: [],
    newPostText: '',
    userPostsLoading: true,
    btnPostsLoading: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE__ADD_NEW_POST_USER:
            let newPost = {
                _id: action.postId,
                content: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts].slice(0, 5),
                newPostText: ''
            };

        case PROFILE__NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };

        case PROFILE__SET_USER_COUNT_POSTS:
            return {
                ...state,
                countPosts: action.countPosts
            };

        case PROFILE__LOADING_USER_POSTS:
            return {
                ...state,
                userPostsLoading: action.userPostsLoading
            };

        case PROFILE_UPDATE_USER_DESCRIPTION:
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    userDescription: action.userDescription
                }
            };

        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                userProfile: {
                    ...action.profileData
                }
            };

        case PROFILE_SET_IS_EDIT_INPUT:
            return {
                ...state,
                isEditInput: action.isEditInput
            };

        case PROFILE_SET_EDIT_INPUT_VALUE:
            return {
                ...state,
                editInputValue: action.editInputValue
            };

        case PROFILE_INPUT_FIELD_UPDATING:
            return {
                ...state,
                inputFieldUpdating: [...action.fieldNames]
            };

        case PROFILE_UPDATE_USER_AVATAR:
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    userAvatar: action.userAvatar
                }
            };

        case PROFILE__GET_USER_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.posts.map(p => ({
                    ...p,
                    isLikeFetching: false
                }))]
            };

        case PROFILE_CHANGE_PAGE_POSTS_NUMBER:
            return {
                ...state,
                pagePosts: ++state.pagePosts
            };

        case PROFILE__SET_MAX_PAGE_POSTS_USER:
            return {
                ...state,
                maxPagePosts: action.maxPage
            };

        case PROFILE_BTN_POST_LOADING:
            return {
                ...state,
                btnPostsLoading: action.btnPostsLoading
            };

        case PROFILE__IS_LIKE_FETCHING:
            return {
                ...state,
                posts: [...state.posts].map(p => {
                    if (p._id === action.postId) {
                        return {
                            ...p,
                            isLikeFetching: !p.isLikeFetching
                        }
                    }
                })
            };

        default:
            return state;
    }
};

export const newPostTextChange = (text) => ({type: PROFILE__NEW_POST_TEXT, text});
export const setProfileUserData = (profileData) => ({type: SET_USER_PROFILE_DATA, profileData});
export const setIsEditInput = (isEditInput) => ({type: PROFILE_SET_IS_EDIT_INPUT, isEditInput});
export const setEditInputValue = (editInputValue) => ({type: PROFILE_SET_EDIT_INPUT_VALUE, editInputValue});
export const updateUserAvatar = (userAvatar) => ({type: PROFILE_UPDATE_USER_AVATAR, userAvatar});
export const loadUserAvatar = (userAvatar) => ({type: PROFILE_LOAD_USER_AVATAR, userAvatar});
export const profileUserLoadData = (userId = null) => ({type: PROFILE_USER_LOAD_DATA, userId});
export const profileUpdateUserFields = (userField, fieldValue) => ({
    type: PROFILE_UPDATE_USER_FIELD,
    userField,
    fieldValue
});
export const profileInputFieldUpdating = (fieldNames) => ({type: PROFILE_INPUT_FIELD_UPDATING, fieldNames});
export const loadNewPostText = () => ({type: PROFILE__CREATE_NEW_POST_TEXT});
export const addNewPostUserProfile = (newPostText, postId) => ({type: PROFILE__ADD_NEW_POST_USER, newPostText, postId});
export const loadProfileUserPosts = () => ({type: PROFILE__LOAD_USER_POSTS});
export const getProfileUserPosts = (posts) => ({type: PROFILE__GET_USER_POSTS, posts});
export const profileUserPostsLoading = (userPostsLoading) => ({type: PROFILE__LOADING_USER_POSTS, userPostsLoading});
export const profileSetUserCountPosts = (countPosts) => ({type: PROFILE__SET_USER_COUNT_POSTS, countPosts});
export const profileChangePagePostsNumber = () => ({type: PROFILE_CHANGE_PAGE_POSTS_NUMBER});
export const profileSetMaxPagePostsUser = (maxPage) => ({type: PROFILE__SET_MAX_PAGE_POSTS_USER, maxPage});
export const profileBtnUserPostsLoading = (btnPostsLoading) => ({type: PROFILE_BTN_POST_LOADING, btnPostsLoading});
export const profileIsLikeFetchingToggle = (postId) => ({type: PROFILE__IS_LIKE_FETCHING, postId});

export default profileReducer;