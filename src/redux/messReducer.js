import {getChatByUserId, mutateSendingMess} from "../utils/helpers";

const MESS_SET_MESS = `MESS_SET_MESS`;
export const MESS_GET_SENDING_MESS = `MESS_GET_SENDING_MESS`;
const MESS__SET_TEMPORARY_MESS = `MESS__SET_TEMPORARY_MESS`;
const MESS__SET_UNREAD_MESS = `MESS__SET_UNREAD_MESS`;
const MESS__REMOVE_UNREAD_MESS = `MESS__REMOVE_UNREAD_MESS`;

let initialState = {
    mess: null,
    unreadMesses: []

};

const messReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESS_SET_MESS:
            return {
                ...state,
                mess: action.mess
            };

        case MESS_GET_SENDING_MESS:
            return {
                ...state,
                mess: mutateSendingMess(state.mess ? [...state.mess] : [], action.mess)
            };

        case MESS__SET_TEMPORARY_MESS:
            return {
                ...state,
                mess: [action.mess, ...state.mess]
            };

        case MESS__SET_UNREAD_MESS:
            return {
                ...state,
                unreadMesses: action.mess.mess.recipientId === action.authUserId && getChatByUserId(action.chats, action.mess.mess.senderId) ? [...state.unreadMesses, action.mess.mess] : [...state.unreadMesses]
            };

        case MESS__REMOVE_UNREAD_MESS:
            debugger
            return {
                ...state,
                unreadMesses: [...state.unreadMesses].filter(m => (m.senderId !== action.senderId))
            };

        default:
            return state;
    }
};

export const messSetMess = ({mess}) => ({type: MESS_SET_MESS, mess});
export const messGetMess = ({mess}) => ({type: MESS_GET_SENDING_MESS, mess});
export const messSetTemporaryMess = (mess) => ({type: MESS__SET_TEMPORARY_MESS, mess});
export const messSetUnreadMess = (mess, state) => ({type: MESS__SET_UNREAD_MESS, mess, authUserId: state.auth.userId, chats: state.chats.chats});
export const messRemoveUnreadMess = (senderId) => ({type: MESS__REMOVE_UNREAD_MESS, senderId});

export default messReducer;

// temporaryId,
//     message,
//     senderId: authUserId,
//     recipientId: userId