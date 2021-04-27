export const chatsSelector = (state) => (state.chats.chats);
export const chatsMessTextSelector = (state, userId) => {
    return state.chats.chats.filter(c => c.userId === userId)[0].textMess
};