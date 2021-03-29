import React from "react";
import Classes from "./Login.module.css";
import {Form} from 'react-final-form';
import LoginReactForm from "./LoginReactForm";

const Login = (props) => {
    const onSubmit = (values) => {
        props.authLoadUserToken({
            userEmail: values.userEmail,
            userPassword: values.userPassword
        });
    };

    return (
        <div className={Classes.Login}>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                    <LoginReactForm handleSubmit={handleSubmit} values={values} />
                )}
            />
        </div>
    );
};

export default Login;