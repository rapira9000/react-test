import {io} from "socket.io-client";
import store from "../redux/redux-store";
import {authTokenSelector} from "../selectors/auth";
import {WEBSOCKET__GET_MESSAGES, WEBSOCKET__SEND_MESSAGE, webSocketEvents} from "./websocketEvents";

export const connectWebSocket = () => {
    const socket = io("http://localhost:3001", {
        path: '/websocket/',
        extraHeaders: {
            Authorization: authTokenSelector(store.getState())
        }
    });

    webSocketEvents.forEach(webSocket => {
        socket.on(webSocket.event, (data) => {
            webSocket.callbacks = webSocket.callbacks instanceof Array ? webSocket.callbacks : [webSocket.callbacks];
            webSocket.callbacks.forEach(callback => {
                if (!data.errorStatus) {
                    store.dispatch(callback(data, store.getState()))
                } else {
                    alert(data.errorStatus);
                }

            });
        });
    });

    socket.on("connect_error", (err) => {
        alert('error websockets');
        console.log(err);
    });

    return ({event, data}) => {
        socket.emit(event, data);
    };
};

export const webSocketGetMess = (data) => ({event: WEBSOCKET__GET_MESSAGES, data});
export const webSocketSendMess = (data) => ({event: WEBSOCKET__SEND_MESSAGE, data});