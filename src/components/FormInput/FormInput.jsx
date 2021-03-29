import React, {useReducer} from "react";
import Classes from "./FormInput.module.css";
import {composeValidators, setErrorClassFiledForProfile} from "../../utils/validators";
import {Field} from "react-final-form";
import {changeInputValue, profileLocalReducer, setInputWasActivated, toggleIsActive} from "./formInputReducer";
import editIcon from "../../img/reduct-icon.svg";
import Icon from "../Icon/Icon";
import {toggleFieldUpdating} from "../../utils/helpers";
import Preloader from "../Preloader/Preloader";

const FormInput = (props) => {
    const initialValues = props.inputOptions;
    const mockForEmptyInputValue = `----`;
    const [localState, dispatch] = useReducer(profileLocalReducer, initialValues);
    const inputLabel = localState.fieldDescription.length ?
        <label className={Classes.label}>{localState.fieldDescription}</label> :
        '';
        const filedUpdatingPreloader = props.inputFieldUpdating.includes(localState.inputName) ? <div className={Classes.preloaderWrapper}><Preloader/></div> : "";

    return (
        <Field
            name={localState.inputName}
            validate={localState.inputWasActivated ? composeValidators(...initialValues.validators) : undefined}
        >
            {({input, meta}) => (
                <div className={Classes.item_wrapper}>
                    {inputLabel}
                    {
                        ((localState.popupField && (localState.isActive)) || !localState.popupField)
                            ? <div className={Classes.inputWrapper}>

                                <localState.fieldName
                                    className={`${setErrorClassFiledForProfile(meta, Classes.inputError)} ${Classes.input} ${localState.fieldClasses}`}
                                    {...input}
                                    type={localState.fieldType}
                                    value={localState.value || ""}
                                    onChange={
                                        (e) => {
                                            input.onChange(e);
                                            dispatch(changeInputValue(e.currentTarget.value));
                                        }
                                    }
                                    onBlur={
                                        () => {
                                            if (!meta.error && meta.active) {
                                                dispatch(toggleIsActive(false));
                                                props.setIsEditInput(false);
                                                if (meta.modified) {
                                                    props.updateUserProfileFiled(localState.inputName, localState.value);
                                                    props.profileInputFieldUpdating(toggleFieldUpdating(false, localState.inputName, props.inputFieldUpdating));
                                                }
                                            }
                                        }
                                    }
                                    autoFocus={true}
                                />
                                {
                                    /*input tooltip*/
                                    meta.error && meta.active
                                        ? <div className={Classes.inputToolTip}>{meta.error}</div>
                                        : ""
                                }
                            </div>
                            : ""
                    }

                    {
                        (localState.popupField && !localState.isActive)
                            ? <span>{localState.value || mockForEmptyInputValue}</span>
                            : ""
                    }

                    {/*redact icon*/}
                    {localState.popupField && localState.editable
                        ? <div
                            className={Classes.editFiled}
                            title={"double click to redact text"}
                            onClick={
                                () => {
                                    if (!localState.inputWasActivated) {
                                        dispatch(setInputWasActivated(true));
                                    }

                                    if (!props.isEditInput) {
                                        dispatch(toggleIsActive(true));
                                        props.setIsEditInput(true);
                                    }
                                }
                            }
                        >
                            <Icon className={`edit_profile_field`} src={editIcon}/>
                            {filedUpdatingPreloader}
                        </div>
                        : ""
                    }
                </div>
            )}
        </Field>
    );
};

export default FormInput;