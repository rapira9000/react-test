import {calculatePagiMaxPages} from "../utils/helpers";

export const POSTS__LOAD_POSTS = `POSTS__LOAD_POSTS`;
export const POSTS__LOADING = `POSTS__LOADING`;
export const POSTS__SET_MAX_PAGES = `POSTS__SET_MAX_PAGES`;
const POSTS__SET_POSTS = `POSTS__SET_POSTS`;
const POSTS__CALCULATE_NEXT_PAGE = `POSTS__CALCULATE_NEXT_PAGE`;
export const POSTS__LIKE = `POSTS__LIKE`;
export const POSTS__TOGGLE_LIKE_FETCHING = `POSTS__TOGGLE_LIKE_FETCHING`;
export const POSTS__UPDATE_LIKE = `POSTS__UPDATE_LIKE`;
export const POSTS_RESET_PAGE = `POSTS_RESET_PAGE`;

const defaultPageStart = 1;

let initialState = {
    posts: [],
    limit: 5,
    page: defaultPageStart,
    maxPages: 0,
    isPostsLoading: false,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS__CALCULATE_NEXT_PAGE:
            return {
                ...state,
                page: ++state.page
            };
        case POSTS_RESET_PAGE:
            return {
                ...state,
                page: defaultPageStart,
                posts: []
            };

        case POSTS__SET_MAX_PAGES:
            return {
                ...state,
                maxPages: calculatePagiMaxPages(action.count, state.limit)
            };

        case POSTS__LOADING:
            return {
                ...state,
                isPostsLoading: !state.isPostsLoading
            };

        case POSTS__SET_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.posts.map(p => ({...p, isLikeFetching: false}))]
            };

        case POSTS__TOGGLE_LIKE_FETCHING:
            return {
                ...state,
                posts: [...state.posts].map(p => {
                    if (p._id === action.postId) {
                        return {
                            ...p,
                            isLikeFetching: !p.isLikeFetching
                        };
                    } else {
                        return p;
                    }
                })
            };

        case POSTS__UPDATE_LIKE:
            return {
                ...state,
                posts: [...state.posts].map(p => {
                    if (p._id === action.postId) {
                        return {
                            ...p,
                            isDisableLike: action.isDisableLike,
                            likes: action.likes
                        }
                    } else {
                        return p;
                    }
                })
            };

        default:
            return state;
    }
};

export const postsLoadPosts = (apiFun, setByKeyStore = 'posts') => ({type: POSTS__LOAD_POSTS, apiFun, setByKeyStore});
export const postsSetMaxPagesLimit = (count) => ({type: POSTS__SET_MAX_PAGES, count});
export const postsToggleLoading = () => ({type: POSTS__LOADING});
export const postsSetPosts = (posts) => ({type: POSTS__SET_POSTS, posts});
export const postsCalculateNextPage = () => ({type: POSTS__CALCULATE_NEXT_PAGE});
export const postsLikePost = (postId) => ({type: POSTS__LIKE, postId});
export const postsUpdateLike = ({postId, isDisableLike, likes}) => ({
    type: POSTS__UPDATE_LIKE,
    postId,
    isDisableLike,
    likes
});
export const postsToggleLikeFetching = (postId) => ({type: POSTS__TOGGLE_LIKE_FETCHING, postId});
export const postsResetPage = () => ({type: POSTS_RESET_PAGE});

export default postsReducer;