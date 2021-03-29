const UPDATE_INPUT_VALUE = `UPDATE_INPUT_VALUE`;
const CHANGE_FIELD_STATUS = `CHANGE_FIELD_STATUS`;
const INPUT_WAS_ACTIVATED = `INPUT_WAS_ACTIVATED`;

export const profileLocalReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_INPUT_VALUE:
            return {
                ...state,
                value: action.inputValue
            };

        case CHANGE_FIELD_STATUS:
            return {
                ...state,
                isActive: action.isActive
            };

        case INPUT_WAS_ACTIVATED:
            return {
                ...state,
                inputWasActivated: action.inputWasActivated
            };

        default:
            throw new Error();
    }
};

export const changeInputValue = (inputValue) => ({type: UPDATE_INPUT_VALUE, inputValue});
export const toggleIsActive = (isActive) => ({type: CHANGE_FIELD_STATUS, isActive});
export const setInputWasActivated = (inputWasActivated) => ({type: INPUT_WAS_ACTIVATED, inputWasActivated});