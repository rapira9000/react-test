import {followUnFollowUser} from "../utils/helpers";

const USERS_SET_USERS = `USERS-SET-USERS`;
const USERS_FOLLOW_BY_USER = `USERS-FOLLOW-BY-USER`;
const USERS_UNFOLLOW_BY_USER = `USERS-UNFOLLOW-BY-USER`;
const USERS__IS_FETCHING = `USERS__IS_FETCHING`;
const USERS__FOLLOWING_IN_PROGRESS = `USERS__FOLLOWING_IN_PROGRESS`;
export const USERS__LOAD_USERS = `USERS__LOAD_USERS`;
export const USERS__LOAD_FOLLOW = `USERS__LOAD_FOLLOW`;
export const USERS__LOAD_UNFOLLOW = `USERS__LOAD_UNFOLLOW`;
const USERS__RESET_PAGE = `USERS__RESET_PAGE`;
export const USERS__SET_USERS_ONLINE_STATUS = `USERS__SET_USERS_ONLINE_STATUS`;
const USERS__ADD_USER_ONLINE = `USERS__ADD_USER_ONLINE`;
const USERS__REMOVE_USER_ONLINE = `USERS__REMOVE_USER_ONLINE`;

let initialState = {
    posts: [],
    followingInProgressUsersIds: [],
    usersOnline: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_SET_USERS:
            return {
                ...state,
                posts: [...state.posts, ...action.posts]
            };

        case USERS_FOLLOW_BY_USER:
            return followUnFollowUser(state, action.userId, true);

        case USERS_UNFOLLOW_BY_USER:
            return followUnFollowUser(state, action.userId, false);

        case USERS__FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgressUsersIds: action.isFetchingFollowing ? [...state.followingInProgressUsersIds, action.userId] : [...state.followingInProgressUsersIds.filter(item => item !== action.userId)]
            };

        case USERS__RESET_PAGE:
            return {
                ...state,
                posts: []
            };

        case USERS__SET_USERS_ONLINE_STATUS:
            return {
                ...state,
                usersOnline: action.usersOnline
            };

        case USERS__ADD_USER_ONLINE:
            return {
                ...state,
                usersOnline: [...state.usersOnline, action.userId]
            };

        case USERS__REMOVE_USER_ONLINE:
            return {
                ...state,
                usersOnline: [...state.usersOnline].filter(i => i !== action.userId)
            };

        default:
            return state;
    }
};

export const toggleIsFetching = (isFetching) => ({type: USERS__IS_FETCHING, isFetching});
export const setUsers = (posts) => ({type: USERS_SET_USERS, posts});
export const followUser = (userId = 0) => ({type: USERS_FOLLOW_BY_USER, userId});
export const unFollowUser = (userId = 0) => ({type: USERS_UNFOLLOW_BY_USER, userId});
export const followingInProgress = (isFetchingFollowing, userId) => ({
    type: USERS__FOLLOWING_IN_PROGRESS,
    isFetchingFollowing,
    userId
});
export const userFollowHandler = (userId) => ({type: USERS__LOAD_FOLLOW, userId});
export const userUnFollowHandler = (userId) => ({type: USERS__LOAD_UNFOLLOW, userId});
export const usersResetPage = () => ({type: USERS__RESET_PAGE});
export const usersSetUsersOnlineStatus = ({usersOnline}) => ({type: USERS__SET_USERS_ONLINE_STATUS, usersOnline});
export const usersAddUserOnline = ({userId}) => ({type: USERS__ADD_USER_ONLINE, userId});
export const usersRemoveUserOnline = ({userId}) => ({type: USERS__REMOVE_USER_ONLINE, userId});

export default usersReducer;