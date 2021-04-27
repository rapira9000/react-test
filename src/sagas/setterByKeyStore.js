import {setUsers} from "../redux/usersReducer";
import {postsSetPosts} from "../redux/postsReducer";

export const setterByKeyStore = {
    usersPage: setUsers,
    posts: postsSetPosts
};