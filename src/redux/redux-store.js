import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger';
import {rootSaga} from "../sagas/rootSaga";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

window.state = store;

export default store;