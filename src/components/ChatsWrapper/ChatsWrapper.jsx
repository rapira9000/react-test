import React from "react";
import {connect} from "react-redux";
import {chatsSelector} from "../../selectors/chat";
import ChatWindowContainer from "../ChatWindow/ChatWindowContainer";
import {chatsChangeTextAreaToSend, chatsCloseChat} from "../../redux/chatsReducer";

const ChatsWrapper = (props) => {
    return props.chats.map(chat => (chat.isActive
        ? <ChatWindowContainer
            closeChat={props.chatsCloseChat}
            changeMessTextarea={props.chatsChangeTextAreaToSend}
            key={chat.userId}
            {...chat}
        />
        : ""));
};

const mapStateToProps = (state) => ({
    chats: chatsSelector(state)
});

export default connect(mapStateToProps,{
    chatsCloseChat,
    chatsChangeTextAreaToSend,
})(ChatsWrapper);