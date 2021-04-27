import React, {useEffect} from "react";
import {authGetAuthUserId, authInstanceWebSocketEmitSelector} from "../../selectors/auth";
import {connect} from "react-redux";
import MessWrapper from "./MessWrapper";
import MessContainer from "../Mess/MessContainer";
import Preloader from "../Preloader/Preloader";
import {messRemoveUnreadMess, messSetTemporaryMess} from "../../redux/messReducer";
import {messSelector} from "../../selectors/mess";
import {webSocketGetMess, webSocketSendMess} from "../../websockets/websocket";
import {chatsChangeTextAreaToSend, chatsClearTextArea} from "../../redux/chatsReducer";
import {chatsMessTextSelector} from "../../selectors/chat";

const MessWrapperContainer = (props) => {
    useEffect(() => {
            props.webSocketEmit(webSocketGetMess({userId: props.userId}));
    }, []);

    const scrollMessListToBottom = (messWrapperItems) => {
        messWrapperItems.current.scrollIntoView({block: "end", behavior: "smooth"});
    };

    const changeMessTextHandler = (messText) => {
        props.chatsChangeTextAreaToSend(props.userId, messText);
    };

    const sendMessHandler = (textMess) => {
        const temporaryId = Date.now();
        props.messSetTemporaryMess({
            usersChat: [props.userId, props.authUserId],
            temporaryId,
            content: textMess,
            recipientId: props.userId,
            senderId: props.authUserId,
            isLoading: true,
        });

        props.webSocketEmit(webSocketSendMess(
            {
                temporaryId,
                content: textMess,
                userId: props.userId
            }));
    };

    const messItems = props.mess
        ? props.mess.length
            ? props.mess.map(m => (<MessContainer
                key={m?._id || m.temporaryId}
                authUserId={props.authUserId}
                userId={props.userId}
                {...m} />))
            : 'no mess yet :('
        : <Preloader/>;

    return <MessWrapper
        scrollMessListToBottom={scrollMessListToBottom}
        sendMessHandler={sendMessHandler}
        mess={messItems}
        textMess={props.textMess}
        changeMessTextHandler={changeMessTextHandler}
        chatsClearTextArea={props.chatsClearTextArea}
        userId={props.userId}
        messRemoveUnreadMess={props.messRemoveUnreadMess}
    />;
};

const mapStateToProps = (state, {userId}) => ({
    webSocketEmit: authInstanceWebSocketEmitSelector(state),
    mess: messSelector(state, userId),
    textMess: chatsMessTextSelector(state, userId),
    authUserId: authGetAuthUserId(state)
});

export default connect(mapStateToProps, {
    messSetTemporaryMess,
    chatsChangeTextAreaToSend,
    chatsClearTextArea,
    messRemoveUnreadMess
})(MessWrapperContainer);