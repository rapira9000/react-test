import React from "react";
import Classes from "./Registration.module.css";
import {Field, Form} from "react-final-form";
import {
    composeValidators,
    rangeLengthValueFiled,
    requiredField,
    setErrorClassFiled,
    validateEmail
} from "../../utils/validators";

const Registration = (props) => {
    const onSubmit = (values) => {
        props.userLoadRegistration(values);
    };

    return (
      <div className={Classes.Registration}>
          <Form
              onSubmit={onSubmit}
              render={({handleSubmit, form, submitting, pristine, values}) => (
                  <form onSubmit={handleSubmit} className={Classes.LoginForm}>
                      <Field
                          name={"userName"}
                          validate={
                              composeValidators(requiredField, rangeLengthValueFiled(5, 15))
                          }
                      >
                          {({input, meta}) => {
                              return (
                                  <div className={Classes.item}>
                                      <label className={Classes.label}>User name</label>
                                      <input className={`${setErrorClassFiled(meta,  Classes.inputError)} ${Classes.inputField}`}
                                             {...input}
                                             type="text"
                                             placeholder="User name"
                                      />
                                  </div>
                              );
                          }}
                      </Field>
                      <Field
                          name={"userEmail"}
                          validate={
                              composeValidators(requiredField, validateEmail)
                          }
                      >
                          {({input, meta}) => {
                              return (
                                  <div className={Classes.item}>
                                      <label className={Classes.label}>User Email</label>
                                      <input className={`${setErrorClassFiled(meta, Classes.inputError)} ${Classes.inputField}`}
                                             {...input}
                                             type="email"
                                             placeholder="user email"
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
                      <div className={Classes.item}>
                          <button type="submit">Submit</button>
                      </div>
                  </form>
              )}
          />
      </div>
    );
};

export default Registration;