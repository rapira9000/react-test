import React from "react";
import "./ChatWindow.css";
import OnlineStatusContainer from "../OnlineStatus/OnlineStatusContainer";
import MessWrapperContainer from "../MessWrapper/MessWrapperContainer";

const ChatWindow = (props) => {
    return (
        <div className="chat-window">
            <div className={"chat-window__header"}>
                <div className={"chat-window__user-avatar"}>
                    <img src={props.userAvatar}/>
                </div>
                <div className={"chat-window__user-name"}>
                    {props.userName}
                    <OnlineStatusContainer isOnline={props.isOnline} onlineStatusShow={true} />
                </div>
                <div className={"chat-window__controls"}>
                    <button onClick={() => {props.closeChat(props.userId)}}>Close</button>
                </div>
            </div>
            <div className={"chat-window__body"}>
                <MessWrapperContainer userId={props.userId}/>
            </div>
        </div>
    );
};

export default ChatWindow;