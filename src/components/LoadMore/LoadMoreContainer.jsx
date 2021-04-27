import React from "react";
import LoadMore from "./LoadMore";
import Preloader from "../Preloader/Preloader";
import {isLoadMoreEnable} from "../../utils/helpers";
import {connect} from "react-redux";
import {
    postsGetMaxPages,
    postsGetPageSelector,
    postsIsLoadingSelector,
} from "../../selectors/posts";
import {postsCalculateNextPage} from "../../redux/postsReducer";

const LoadMoreContainer = (props) => {
    const setNextPageHandler = () => {
        props.postsCalculateNextPage();
    };

    const loadMoreHandler = () => {
        props.loadMore(props.apiFn, props.getByKeyStore);
    };

    return (
        props.isPostsLoading
            ? <Preloader/>
            : (isLoadMoreEnable(props.page, props.maxPages)
                ? <LoadMore
                    setNextPageHandler={setNextPageHandler}
                    loadMore={loadMoreHandler}
                />
                : "")
    );
};

const maoStateToProps = (state) => ({
    isPostsLoading: postsIsLoadingSelector(state),
    maxPages: postsGetMaxPages(state),
    page: postsGetPageSelector(state),
});

export default connect(maoStateToProps, {
    postsCalculateNextPage
})(LoadMoreContainer);