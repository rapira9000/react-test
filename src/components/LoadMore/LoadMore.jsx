import React from "react";
import Classes from "./LoadMore.module.css";

const LoadMore = (props) => {
    return (
        <div className={Classes.LoadMore}>
            <button
                onClick={() => {
                    props.setNextPageHandler();
                    props.loadMore();
                }}>Load more
            </button>
        </div>
    );
};

export default LoadMore;