import {usersAddUserOnline, usersRemoveUserOnline, usersSetUsersOnlineStatus} from "../redux/usersReducer";
import {chatsSetUsersOnlineStatus} from "../redux/chatsReducer";
import {messGetMess, messSetMess, messSetUnreadMess} from "../redux/messReducer";

export const WEBSOCKET__GET_MESSAGES = `WEBSOCKET__GET_MESSAGES`;
export const WEBSOCKET__SEND_MESSAGE = `WEBSOCKET__SEND_MESSAGE`;
export const WEBSOCKET__GET_FOLLOWERS_STATUS_ONLINE = `WEBSOCKET__GET_FOLLOWERS_STATUS_ONLINE`;
export const WEBSOCKET__NOTIFI_FOLLOWERS_USER_STATUS_ONLINE = `WEBSOCKET__NOTIFI_FOLLOWERS_USER_STATUS_ONLINE`;
export const WEBSOCKET__NOTIFI_FOLLOWERS_USER_STATUS_OFFLINE = `WEBSOCKET__NOTIFI_FOLLOWERS_USER_STATUS_OFFLINE`;

export const webSocketEvents = [
    {
      event: WEBSOCKET__GET_FOLLOWERS_STATUS_ONLINE,
      callbacks: [
          usersSetUsersOnlineStatus,
          chatsSetUsersOnlineStatus
      ]
    },
    {
        event: WEBSOCKET__NOTIFI_FOLLOWERS_USER_STATUS_ONLINE,
        callbacks: [
            usersAddUserOnline
        ]
    },
    {
        event: WEBSOCKET__NOTIFI_FOLLOWERS_USER_STATUS_OFFLINE,
        callbacks: [
            usersRemoveUserOnline
        ]
    },
    {
        event: WEBSOCKET__GET_MESSAGES,
        callbacks: [
            messSetMess,
        ]
    },
    {
        event: WEBSOCKET__SEND_MESSAGE,
        callbacks: [
            messGetMess,
            messSetUnreadMess
        ]
    }

];