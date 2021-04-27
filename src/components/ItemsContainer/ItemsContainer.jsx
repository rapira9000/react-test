import React, {useEffect} from "react";
import Items from "./Items";
import {connect} from "react-redux";
import LoadMoreContainer from "../LoadMore/LoadMoreContainer";
import {postsLoadPosts, postsResetPage} from "../../redux/postsReducer";
import {isAuthSelector} from "../../selectors/auth";
import './Items.css';


const ItemsContainer = (props) => {
    const getByKeyStore = props.getByKeyStore ? props.getByKeyStore : 'posts';
    useEffect(() => {
        if (getByKeyStore === 'posts') {
            props.postsResetPage();
        }
        props.postsLoadPosts(props.apiFn, props.getByKeyStore);
    }, [props.isAuth]);

    const ContainerClass = "items-container" || '' + ' ' + props.containerClass;

    return (
        <div className={ContainerClass}>
            <Items
                items={props.items}
            />
            <LoadMoreContainer
                loadMore={props.postsLoadPosts}
                getByKeyStore={props.getByKeyStore}
                apiFn={props.apiFn}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    isAuth: isAuthSelector(state)
});

export default connect(mapStateToProps, {
    postsLoadPosts,
    postsResetPage
})(React.memo(ItemsContainer));