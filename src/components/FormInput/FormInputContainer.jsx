import React from "react";
import {Form} from "react-final-form";
import FormInput from "./FormInput";
import {connect} from "react-redux";
import {
    getEditInputValueSelector,
    getIsEditInputSelector,
    profileInputFieldUpdatingSelector
} from "../../selectors/profile";
import {
    profileInputFieldUpdating,
    profileUpdateUserFields,
    setEditInputValue,
    setIsEditInput,
} from "../../redux/profileReducer";

const FormInputContainer = (props) => {
    const formFields = Object.keys(props.inputsData).map(key => {
        const formInputOptions = {
            ...props.inputsData[key],
            inputName: key,
            inputWasActivated: false
        };
        const keyComponent = `${key}_01`;
        return <FormInput
            key={keyComponent}
            inputOptions={formInputOptions}
            setIsEditInput={props.setIsEditInput}
            setEditInputValue={props.setEditInputValue}
            isEditInput={props.isEditInput}
            editInputValue={props.editInputValue}
            updateUserProfileFiled={props.profileUpdateUserFields}
            inputFieldUpdating={props.inputFieldUpdating}
            profileInputFieldUpdating={props.profileInputFieldUpdating}
        />;
    });

    return (
        <Form onSubmit={() => {}}
            render={() => (
                <form>
                    {formFields}
                </form>
            )}
        />
    );
};

const mapStateToProps = (state) => ({
    isEditInput: getIsEditInputSelector(state),
    editInputValue: getEditInputValueSelector(state),
    inputFieldUpdating: profileInputFieldUpdatingSelector(state)
});

export default connect(mapStateToProps,{
    setIsEditInput,
    setEditInputValue,
    profileUpdateUserFields,
    profileInputFieldUpdating
})(FormInputContainer);