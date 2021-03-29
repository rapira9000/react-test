const UPDATE_NEW_MESSAGE_BODY = `UPDATE-NEW-MESSAGE-BODY`;
const SEND_MESSAGE = `SEND-MESSAGE`;

let initialState = {
        dialogsUsers: [
            {
                id: 1,
                name: `UserName`
            },
            {
                id: 2,
                name: `Pasha`
            },
            {
                id: 3,
                name: `Roms`
            },
            {
                id: 4,
                name: `Nikolay`
            },
        ],
        dialogsMessages: [
            {
                id: 1,
                message: `Hello amigo`
            },
            {
                id: 2,
                message: `Mia to de lamosta`
            },
            {
                id: 3,
                message: `Where is my money, beach!!!`
            },
            {
                id: 4,
                message: `Alooooha!!!`
            },
        ],
        newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newMassageBody
            };

        case SEND_MESSAGE:
            let newMessage = {
                id:  state.dialogsMessages.length,
                message: state.newMessageBody
            };
            return {
                ...state,
                dialogsMessages: [...state.dialogsMessages, newMessage],
                newMessageBody: ''
            };

        default:
            return state;
    }
};

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMassageBody: text
    };
};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};

export default dialogsReducer;