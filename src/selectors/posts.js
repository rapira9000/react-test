export const postsGetPageSelector = (state) => (state.posts.page);
export const postsGetLimitSelector = (state) => (state.posts.limit);
export const postsGetMaxPages = state => (state.posts.maxPages);
export const postsIsLoadingSelector = state => (state.posts.isPostsLoading);
export const postsSelector = (state, type = 'posts') => (state[type].posts);