const AUTH__SET_USER_DATA = `AUTH__SET_USER_DATA`;
const AUTH__IS_FETCHING = `AUTH__IS_FETCHING`;
const AUTH__SET_IS_AUTH = `AUTH__SET_IS_AUTH`;
const AUTH__SET_USER_TOKEN = `AUTH__SET_USER_TOKEN`;
const AUTH__LOGOUT_USER = `AUTH__LOGOUT_USER`;
export const AUTH_TOKEN_FROM_LOCAL_STORAGE = `AUTH_TOKEN_FROM_LOCAL_STORAGE`;
export const AUTH__LOAD_USER_DATA = `AUTH__LOAD_USER_DATA`;
export const AUTH_LOAD_USER_TOKEN = `AUTH_LOAD_USER_TOKEN`;
export const AUTH_LOAD_USER_REGISTRATION = `AUTH_LOAD_USER_REGISTRATION`;
const AUTH__SET_SOCKET = `AUTH__SET_SOCKET`;
export const AUTH__LOADING_CONN_SOCKET = `AUTH__LOADING_CONN_SOCKET`;

let initialState = {
    isFetching: false,
    userId: null,
    userName: null,
    userEmail: null,
    isAuth: false,
    userAuthToken: null,
    socket: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH__SET_USER_DATA:
            return {
                ...state,
                userId: action.userData.userId,
                userName: action.userData.userName,
                userEmail: action.userData.userEmail
            };

        case AUTH__IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case AUTH__SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            };
        case AUTH__SET_USER_TOKEN:
            setTokenToStorage(action.userAuthToken);
            return {
                ...state,
                userAuthToken: action.userAuthToken
            };
        case AUTH__LOGOUT_USER:
            setTokenToStorage(null);
            return {
                ...state,
                userAuthToken: null,
                isAuth: false,
                userId: null,
                userName: null,
                userEmail: null
            };
        case AUTH__SET_SOCKET:
            return {
                ...state,
                webSocketEmit: action.webSocketEmit
            };
        default:
            return state;
    }
};

export const setUserData = (userData) => ({type: AUTH__SET_USER_DATA, userData});
export const setUserDataFetching = (isFetching) => ({type: AUTH__IS_FETCHING, isFetching});
export const setAuthStatus = (isAuth) => ({type: AUTH__SET_IS_AUTH, isAuth});
export const setUserToken = (userAuthToken) => ({type: AUTH__SET_USER_TOKEN, userAuthToken});
export const logOutUser = () => ({type: AUTH__LOGOUT_USER});
export const setTokenToStorage = (token) => {
    localStorage.setItem(AUTH_TOKEN_FROM_LOCAL_STORAGE, token);
};
export const authLoadUserData = () => ({type: AUTH__LOAD_USER_DATA});
export const authLoadUserToken = ({userEmail, userPassword}) => ({type: AUTH_LOAD_USER_TOKEN, userEmail, userPassword});
export const userLoadRegistration = ({userName, userEmail, userPassword}) => ({
    type: AUTH_LOAD_USER_REGISTRATION,
    userName,
    userEmail,
    userPassword
});
export const setInstanceSocket = (webSocketEmit) => ({type: AUTH__SET_SOCKET, webSocketEmit});
export const authLoadingConnWebSocket = (onEvents) => ({type: AUTH__LOADING_CONN_SOCKET, onEvents});

export default authReducer;