export const replaceBackslashesOnImages = (filePath) => {
    const pattern = /\\/g;
    return filePath.replace(pattern, '/');
};

export const generateFullImageUrl = (src) => {
    return 'http://localhost:3001/' + src;
};

export const followUnFollowUser = (state, userId, followType) => {
    return {
        ...state,
        posts: [...state.posts.map((user) => {
            if (user._id === userId) {
                return (
                    {
                        ...user,
                        isFollow: followType
                    }
                );
            }
            return user;
        })]
    };
};

export const toggleFieldUpdating = (remove = false, fieldName = '', fieldNamesArr = []) => {
    if (remove) {
        return fieldNamesArr.filter(name => {
            return name !== fieldName;
        });
    } else {
        return [...fieldNamesArr, fieldName];
    }
};

export const calculatePagiMaxPages = (count, limit) => {
    return Math.ceil(+count / +limit)
};

export const isLoadMoreEnable = (page, maxPages) => (+page < +maxPages);

export const isIssetChat = (chats, userId) => {
    return !!chats.filter(item => (item.userId === userId)).length;
};

export const setIsActiveChat = (chats, userId) => {
    return chats.map(item => {
        return {
            ...item,
            isActive: item.userId === userId
        }
    });
};

export const associativeArrayConvert = (arr, keyName) => {
    let assocArr = [];
    arr.forEach(item => {
        assocArr[item[keyName]] = item;
    });
    return assocArr;
};

export const mutateSendingMess = (mess, sendingMess) => {
    const isTemporaryMess = !!mess.filter(m => m.temporaryId === sendingMess.temporaryId).length;
    if (isTemporaryMess) {
        return mess.map(m => {
            return m.temporaryId === sendingMess.temporaryId
                ? {
                    ...m,
                    isLoading: false
                } :
                {...m}
        });
    } else {
        return [sendingMess, ...mess];
    }
};

export const getChatByUserId = (chats, userId) => {
    return !chats.length
        ? true
        : !!chats.filter(c => c.userId = userId && c.isActive === false).length;

};