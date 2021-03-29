import React from "react";
import classes from "./Avatar.module.css"
import editIcon from "../../img/reduct-icon.svg";
import {Field, Form} from "react-final-form";
import {composeValidators, requiredField, validateFileSize} from "../../utils/validators";

const Avatar = (props) => {
    const inputName = "userAvatar";
    return (
        <div
            onMouseEnter={() => props.showEditButton()}
            onMouseLeave={() => props.hideEditButton()}
            className={classes.avatarWrapper}>
            <img
                className={classes.avatar}
                alt="#"
                src={props.avatarUrl}
            />
            {
                props.btnIsVisible ?
                    <div className={classes.editButton}>
                        <label htmlFor={"avatarFile"}>
                            <img alt="#"  src={editIcon} />
                        </label>
                    </div>
                    : ""
            }

            {
            //    file input
                <Form onSubmit={() => {}}
                      render={() => (
                          <form>
                              <Field
                                  name={inputName}
                                  validate={composeValidators(requiredField, validateFileSize(2097152))}
                                  >
                                  {({input, meta}) => (
                                      <input
                                          onChange={(e) => {
                                              input.onChange(e.currentTarget.files);
                                              props.updateAvatarImage(e.currentTarget.files[0], inputName, !!meta.errors);
                                          }}
                                          id={"avatarFile"}
                                          className={classes.inputFile}
                                          type={"file"}
                                          /*2 mb max size*/
                                          size={"2097152"}
                                          accept={"image/*"}
                                          value={""}
                                          multiple={true}
                                      />
                                  )}
                              </Field>
                          </form>
                      )}
                />
            }
        </div>
    );
};

export default Avatar;