import {followUnFollowUser} from "../utils/helpers";

const USERS_SET_USERS = `USERS-SET-USERS`;
const USERS_FOLLOW_BY_USER = `USERS-FOLLOW-BY-USER`;
const USERS_UNFOLLOW_BY_USER = `USERS-UNFOLLOW-BY-USER`;
const USERS_SET_PAGE = `USERS-SET-PAGE`;
const USERS_SET_TOTAL_USERS_COUNT = `USERS_SET_TOTAL_USERS_COUNT`;
const USERS__IS_FETCHING = `USERS__IS_FETCHING`;
const USERS__FOLLOWING_IN_PROGRESS = `USERS__FOLLOWING_IN_PROGRESS`;
export const USERS__LOAD_USERS = `USERS__LOAD_USERS`;
export const USERS__LOAD_FOLLOW = `USERS__LOAD_FOLLOW`;
export const USERS__LOAD_UNFOLLOW = `USERS__LOAD_UNFOLLOW`;

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgressUsersIds: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };

        case USERS_FOLLOW_BY_USER:
            return followUnFollowUser(state, action.userId, true);

        case USERS_UNFOLLOW_BY_USER:
            return followUnFollowUser(state, action.userId, false);

        case USERS_SET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case USERS_SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };

        case USERS__IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case USERS__FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgressUsersIds: action.isFetchingFollowing ? [...state.followingInProgressUsersIds, action.userId] : [...state.followingInProgressUsersIds.filter(item => item !== action.userId)]
            };

        default:
            return state;
    }
};

export const toggleIsFetching = (isFetching) => ({type: USERS__IS_FETCHING, isFetching});
export const setTotalUsersCount = (totalUsersCount) => ({type: USERS_SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setPage = (currentPage = 1) => ({type: USERS_SET_PAGE, currentPage});
export const setUsers = (users) => ({type: USERS_SET_USERS, users});
export const followUser = (userId = 0) => ({type: USERS_FOLLOW_BY_USER, userId});
export const unFollowUser = (userId = 0) => ({type: USERS_UNFOLLOW_BY_USER, userId});
export const followingInProgress = (isFetchingFollowing, userId) => ({type: USERS__FOLLOWING_IN_PROGRESS, isFetchingFollowing, userId});
export const loadUsers = (currentPage, pageSize) => ({type:USERS__LOAD_USERS, currentPage, pageSize});
export const userFollowHandler = (userId) => ({type: USERS__LOAD_FOLLOW, userId});
export const userUnFollowHandler = (userId) => ({type: USERS__LOAD_UNFOLLOW, userId});

export default usersReducer;