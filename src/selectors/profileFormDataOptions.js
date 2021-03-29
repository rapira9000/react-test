import {fieldNumber, rangeLengthValueFiled, requiredField, validateEmail} from "../utils/validators";

export const profileOptionsValue = {
    userName: {
        fieldName: 'input',
        fieldType: 'text',
        fieldDescription: 'User Name: ',
        fieldClasses: '',
        validators: [requiredField, rangeLengthValueFiled(2, 20)],
        popupField: true,
        isActive: false,
        editable: true
    },
    userEmail: {
        fieldName: 'input',
        fieldType: 'email',
        fieldDescription: 'User email: ',
        fieldClasses: '',
        validators: [requiredField, validateEmail, rangeLengthValueFiled(5, 40)],
        popupField: true,
        isActive: false,
        editable: false
    },
    userNickName: {
        fieldName: 'input',
        fieldType: 'text',
        fieldDescription: 'User nick name: ',
        fieldClasses: '',
        validators: [requiredField, rangeLengthValueFiled(5, 15)],
        popupField: true,
        isActive: false,
        editable: true
    },
    userCity: {
        fieldName: 'input',
        fieldType: 'text',
        fieldDescription: 'User city: ',
        fieldClasses: '',
        validators: [requiredField, rangeLengthValueFiled(5, 15)],
        popupField: true,
        isActive: false,
        editable: true
    },
    userAge: {
        fieldName: 'input',
        fieldType: 'text',
        fieldDescription: 'User age: ',
        fieldClasses: '',
        validators: [requiredField, rangeLengthValueFiled(1, 2), fieldNumber],
        popupField: true,
        isActive: false,
        editable: true
    },
    userDescription: {
        fieldName: 'input',
        fieldType: 'text',
        fieldDescription: 'User description: ',
        fieldClasses: '',
        validators: [requiredField, rangeLengthValueFiled(15, 150)],
        popupField: true,
        isActive: false,
        editable: true
    },
    gender: {
        fieldName: 'input',
        fieldType: 'text',
        fieldDescription: 'User gender: ',
        fieldClasses: '',
        validators: [requiredField, rangeLengthValueFiled(2, 10)],
        popupField: true,
        isActive: false,
        editable: true
    }
};