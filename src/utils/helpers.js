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
        users: state.users.map((user) => {
            if (user._id === userId) {
                return (
                    {
                        ...user,
                        isFollow: followType
                    }
                );
            }
            return user;
        })
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