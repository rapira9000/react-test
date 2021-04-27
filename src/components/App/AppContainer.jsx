import React, { useEffect } from 'react';
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {authLoadingConnWebSocket, authLoadUserData, setInstanceSocket} from "../../redux/authReducer";
import {isUserDataFetchingSelector} from "../../selectors/auth";
import App from "./App";

const AppContainer = (props) => {
    useEffect( () => {
        props.authLoadUserData();
    }, []);

    return (
        <App {...props} />
    );
};

const mapStateToProps = (state) => ({
    isUserDataFetching: isUserDataFetchingSelector(state),
});

export default compose(
    connect(mapStateToProps, {
        authLoadUserData,
        setInstanceSocket,
        authLoadingConnWebSocket
    })
)(AppContainer);