import React from "react";
import Classes from "./CreateNewPost.module.css";
import {Field, Form} from "react-final-form";
import {composeValidators, rangeLengthValueFiled, requiredField, setErrorClassFiled} from "../../utils/validators";
import FormErrorTooltip from "../FormErrorTooltip/FormErrorTooltip";

const CreateNewPost = (props) => {
    const onSubmit = () => {
        props.loadNewPostText();
    };

    const changeNewPostText = (e) => {
      const text = e.currentTarget.value;
      props.newPostTextChange(text);
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <form
                    onSubmit={handleSubmit}
                    className={Classes.createNewPost}
                >
                    <Field
                        name={"userPost"}
                        validate={
                            composeValidators(requiredField, rangeLengthValueFiled(5, 50))
                        }
                    >
                        {({input, meta}) => {
                            return (
                                <>
                                    <div>
                                        <textarea
                                            className={`${setErrorClassFiled(meta, Classes.inputError)} ${Classes.inputField}`}
                                            {...input}
                                            onChange={(e) => {
                                                input.onChange(e);
                                                changeNewPostText(e);
                                            }}
                                            value={props.newPostText}
                                            placeholder={"Enter message"}
                                        />
                                        {meta.error && meta.touched && <FormErrorTooltip text={meta.error}/>}
                                    </div>
                                    <div>
                                        <button type={"submit"}>Add post</button>
                                    </div>
                                </>
                            );
                        }}
                    </Field>
                </form>
            )}
        />
    );
};

export default CreateNewPost;