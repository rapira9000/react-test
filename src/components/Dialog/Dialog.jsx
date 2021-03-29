import React from "react";
import Classes from "./Dialog.module.css";
import DialogsElements from "./DialogsElements/DialogsElements";
import MessageElements from "./MessageElements/MessageElements";

const Dialog = (props) => {
    const dialogsUsers = props.dialogsUsers.map(p => <DialogsElements key={p.id} name={p.name}/>);
    const dialogsMessages = props.dialogsMessages.map(p => <MessageElements key={p.id} messageText={p.message}/>);
    const newMessageBody = props.newMessageBody;

    const onChangeMessageBody = (e) => {
        const value = e.currentTarget.value;
        props.onChangeMessageBody(value);
    };

    const onSendMessageClick = () => {
        props.onSendMessageClick();
    };

    return (
        <div className={Classes.dialogsWrapper}>
            <div>
                {dialogsUsers}
            </div>
            <div>
                {dialogsMessages}
            </div>
            <div>
                <textarea onChange={onChangeMessageBody} value={newMessageBody} />
                <button onClick={onSendMessageClick}>Add message</button>
            </div>
        </div>
    );
};

export default Dialog;