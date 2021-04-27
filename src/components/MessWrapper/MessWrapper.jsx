import React, {useEffect, useRef} from "react";
import {Field, Form} from "react-final-form";
import {composeValidators, rangeLengthValueFiled, requiredField, setErrorClassFiled} from "../../utils/validators";
import Classes from "../Login/Login.module.css";
import "./MessWrapper.css";
import {chatsClearTextArea} from "../../redux/chatsReducer";
import {messRemoveUnreadMess} from "../../redux/messReducer";

const MessWrapper = (props) => {
    const messWrapperToScroll = useRef(null);
    const onSubmit = ({textMess}) => {
        props.sendMessHandler(textMess);
    };

    useEffect(() => {
        props.scrollMessListToBottom(messWrapperToScroll)
    }, [props.mess]);

    return <div className={"mess-wrapper"}>
        <div className={"mess-list"}>
            <div ref={messWrapperToScroll} className={"mess-list--scroll"}>
                {props.mess}
            </div>

        </div>
        <div className={"mess__form-wrapper"}>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form className={"mess__form"} onSubmit={handleSubmit}>
                        <Field
                            name={"textMess"}
                            validate={
                                composeValidators(requiredField, rangeLengthValueFiled(1, 250))
                            }
                        >
                            {({input, meta}) => {
                                return (
                                    <div className={"mess-textarea"}>
                                        <textarea
                                            className={`${setErrorClassFiled(meta, Classes.inputError)} ${Classes.inputField}`}
                                            {...input}
                                            placeholder="your mess"
                                            value={props.textMess}
                                            onChange={(e) => {
                                                input.onChange(e);
                                                props.messRemoveUnreadMess(props.userId);
                                                props.changeMessTextHandler(e.currentTarget.value)
                                            }}
                                        />
                                    </div>
                                );
                            }}
                        </Field>
                        <button
                            onClick={() => {
                                props.scrollMessListToBottom(messWrapperToScroll);
                                props.chatsClearTextArea(props.userId);
                            }}
                            type={"submit"}>Send</button>
                    </form>
                )}
            />
        </div>
    </div>;
};

export default MessWrapper;