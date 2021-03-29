import React from "react";
import Classes from "./Login.module.css";
import {Field} from 'react-final-form';
import {
    composeValidators,
    rangeLengthValueFiled,
    requiredField,
    setErrorClassFiled
} from "../../utils/validators";

const LoginReactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={Classes.LoginForm}>
            <Field
                name={"userEmail"}
                validate={
                    composeValidators(requiredField, rangeLengthValueFiled(5, 15))
                }
            >
                {({input, meta}) => {
                    return (
                        <div className={Classes.item}>
                            <label className={Classes.label}>User email</label>
                            <input className={`${setErrorClassFiled(meta,  Classes.inputError)} ${Classes.inputField}`}
                                   {...input}
                                   type="text"
                                   placeholder="User email"
                            />
                        </div>
                    );
                }}
            </Field>
            <Field
                name={"userPassword"}
                validate={
                    composeValidators(requiredField, rangeLengthValueFiled(7, 16))
                }
            >
                {({input, meta}) => {
                    return (
                        <div className={Classes.item}>
                            <label className={Classes.label}>User password</label>
                            <input className={`${setErrorClassFiled(meta, Classes.inputError)} ${Classes.inputField}`}
                                   {...input}
                                   type="password"
                                   placeholder="Password"
                            />
                        </div>
                    );
                }}
            </Field>
            <Field
                type="checkbox"
                name={"userRememberMe"}
            >
                {({input, meta}) => {
                    return (
                        <div className={Classes.item}>
                            <label htmlFor={"LoginRememberMe"}>Remember me</label>
                            <input id={"LoginRememberMe"} {...input} placeholder="Remember me"/>
                        </div>
                    );
                }}
            </Field>
            <div className={Classes.item}>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default LoginReactForm;