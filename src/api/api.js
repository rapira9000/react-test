import * as axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3001/api/'
});

export const UsersAPI = {
    getUsers: (token, currentPage, pageSize) => {
        return instance.get(`users/?page=${currentPage}&limit=${pageSize}`, {
            headers: {
                'Authorization': token
            },
        }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}))
    },

    followUser: (token, followUserId) => {
        return instance.put(`users/follow/?id=${followUserId}`, '', {
            headers: {
                'Authorization': token
            }
        }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}))
    },

    unFollowUser: (token, unFollowUserId) => {
        return instance.delete(`users/unfollow/?id=${unFollowUserId}`, {
            headers: {
                'Authorization': token
            }
        }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}))
    }
};

export const AuthAPI = {
    getUserData: (token) => {
        return instance.get(`users/get-user`, {
            headers: {
                'Authorization': token
            }
        }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}));
    },

    getAuthToken: (userEmail, userPassword) => {
        return instance.post(`users/login`, {
            userEmail,
            userPassword
        }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}))
    }
};

export const ProfileApi = {
    updateUserDescription: (userId, userDescription) => {
        return instance.post(`users/description`, {
            userDescription,
            userId
        }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}));
    },

    getUserProfileData: (token, userId) => {
        const userQueryId = userId ? `?userId=${userId}` : ``;
        return instance.get(
            `profile/${userQueryId}`,
            {
                headers: {
                    'Authorization': token
                }
            }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}));
    },

    updateUserProfileFiled: (token, userField, userFieldValue) => {
        return instance.patch(
            `profile/update`,
            {
                userField,
                userFieldValue
            },
            {
                headers: {
                    'Authorization': token
                }
            }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}));
    },

    updateUserProfileAvatar: (token, userFieldValue) => {
        const formData = new FormData();
        formData.append('userAvatar', userFieldValue);
        return instance.post(
            `profile/update/avatar`,
            formData,
            {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}));
    },

    createNewPost: (token, text) => {
        return instance.post(
            `profile/create/post`,
            {
                text
            }, {
                headers: {
                    'Authorization': token,
                }
            }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}));
    },

    getProfilePosts: (token, page, limit) => {
        return instance.get(
            `profile/get/post?page=${page}&limit=${limit}`,{
                headers: {
                    'Authorization': token,
                }
            }).then(response => {
            return response.data;
        }).catch(err => ({errorStatus: err}));
    }
};

export const UserRegisterApi = {
    registerNewUser: (userName, userEmail, userPassword) => {
        return instance.post(`users/registration`, {
            userName,
            userEmail,
            userPassword
        }).then(response => {
            return response.data
        }).catch(err => ({errorStatus: err}));
    }
};