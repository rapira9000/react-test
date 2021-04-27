import {associativeArrayConvert, isIssetChat, setIsActiveChat} from "../utils/helpers";

export const CHATS__ADD_CHAT = `CHATS__ADD_CHAT`;
export const CHATS__CLOSE_CHAT = `CHATS__CLOSE_CHAT`;
export const CHATS__CHANGE_TEXTAREA_SEND = `CHATS__CHANGE_TEXTAREA_SEND`;
export const CHATS__SET_USERS_ONLINE_STATUS = `CHATS__SET_USERS_ONLINE_STATUS`;
export const CHATS__CLEAN_MESS_TEXT_AREA = `CHATS__CLEAN_MESS_TEXT_AREA`;

let initialState = {
    chats: [],
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS__ADD_CHAT:
            const chats = [...state.chats];
            const isCreateNewChat = isIssetChat(chats, action.userId);
            if (!isCreateNewChat) {
                chats.push({
                    userName: action.userName,
                    userNickName: action.userNickName,
                    userAvatar: action.userAvatar,
                    userId: action.userId,
                    isOnline: action.isOnline,
                    isActive: true,
                    textMess: ""
                });
            }

            return {
                ...state,
                chats: setIsActiveChat(chats, action.userId)
            };

        case CHATS__CLOSE_CHAT:
            return {
                ...state,
                chats: [...state.chats].map(chat => ({
                    ...chat,
                    isActive: chat.userId === action.userId ? false : chat.isActive
                }))
            };

        case CHATS__CHANGE_TEXTAREA_SEND:
            return {
                ...state,
                chats: [...state.chats].map(chat => ({
                    ...chat,
                    textMess: chat.userId === action.userId ? action.textMess : chat.textMess
                }))
            };

        case CHATS__SET_USERS_ONLINE_STATUS:
            const usersOnlineAssoc = associativeArrayConvert(action.usersOnline, 'userId');
            return {
                ...state,
                chats: [...state.chats].map(chat => ({
                    ...chat,
                    isOnline: !!state.chats.filter(chat => !!usersOnlineAssoc[chat.userId]).length
                }))
            };

        case CHATS__CLEAN_MESS_TEXT_AREA:
            return {
                ...state,
                chats: [...state.chats].map(chat => ({
                    ...chat,
                    textMess: chat.userId === action.userId ? "" : chat.textMess
                }))
            };

        default:
            return state;
    }
};

export const chatsAddNewChat = (userId, userAvatar, userName, userNickName, isOnline) => ({
    type: CHATS__ADD_CHAT,
    userId,
    userAvatar,
    userName,
    userNickName,
    isOnline
});
export const chatsCloseChat = (userId) => ({type: CHATS__CLOSE_CHAT, userId});
export const chatsChangeTextAreaToSend = (userId, textMess) => ({type: CHATS__CHANGE_TEXTAREA_SEND, userId, textMess});
export const chatsSetUsersOnlineStatus = ({usersOnline}) => ({type: CHATS__SET_USERS_ONLINE_STATUS, usersOnline});
export const chatsClearTextArea = (userId) => ({type: CHATS__CLEAN_MESS_TEXT_AREA, userId});

export default chatsReducer;