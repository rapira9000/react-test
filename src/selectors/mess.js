import {authGetAuthUserId} from "./auth";

export const messSelector = (state, userId) => {
    const authUserId = authGetAuthUserId(state);
    return state.mess.mess
        ? authUserId === userId
            ? state.mess.mess.filter(m => (m.usersChat[0] === authUserId && m.usersChat[1] === authUserId))
            : state.mess.mess.filter(m => m.usersChat.includes(userId) && m.usersChat.includes(authUserId))
        : state.mess.mess
};

export const getUnreadMessCount = (state) => {
    return state.mess.unreadMesses.length
};

export const getUnreadMess = (state) => {
    return state.mess.unreadMesses
};

export const isUnreadMessByUserId = (state, userId = 0) => {
    return !!state.mess.unreadMesses.filter(m => m.senderId === userId).length;
};