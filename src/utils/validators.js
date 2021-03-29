export const composeValidators = (...validators) => value => (
    validators.reduce((error, validator) => error || validator(value), undefined)
);

export const requiredField = (value) => {
    return value ? undefined : 'required field'
};

export const rangeLengthValueFiled = (min, max) => value => {
    return (value && value.length >= min && value.length <= max) ? undefined : `range from ${min} to ${max} symbols`;
};

export const setErrorClassFiled = (meta, errorClassName, type = 'touched') => {
    return meta.error && meta[type] ? errorClassName : '';
};

export const setErrorClassFiledForProfile = (meta, errorClassName) => {
    return meta.error && meta.active ? errorClassName : '';
};

export const fieldNumber = (value) => {
    return !Number.isInteger(+value) ? 'mast be a integer' : undefined;
};

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (re.test(String(email).toLowerCase())) ? undefined : 'email error validation';
};

export const maxFileSize = (maxSize, file) => (file.size > maxSize ? `error max size ${maxSize} bites` : undefined)

export const convertObjectToArray = (files) => {
    let arr = [];
    for (let item in files) {
        if (files[item].size) {
            arr.push(files[item]);
        }
    }
    return arr;
};

export const validateFileSize = maxSize => files => (convertObjectToArray(files).reduce((error, file) => error || maxFileSize(maxSize, file), undefined));