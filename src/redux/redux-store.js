import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger';
import {rootSaga} from "../sagas/rootSaga";
import postsReducer from "./postsReducer";
import chatsReducer from "./chatsReducer";
import messReducer from "./messReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    posts: postsReducer,
    chats: chatsReducer,
    mess: messReducer
});

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

window.state = store;

export default store;