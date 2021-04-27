import {AUTH_TOKEN_FROM_LOCAL_STORAGE} from "../redux/authReducer";

export const authTokenSelector = (state) => {
    return state.auth.userAuthToken || (localStorage.getItem(AUTH_TOKEN_FROM_LOCAL_STORAGE) || null);
};
export const isAuthSelector = state => (state.auth.isAuth);
export const isUserDataFetchingSelector = state => (state.auth.isFetching);
export const authInstanceWebSocketEmitSelector = state => (state.auth.webSocketEmit);
export const authGetAuthUserId = state => (state.auth.userId);