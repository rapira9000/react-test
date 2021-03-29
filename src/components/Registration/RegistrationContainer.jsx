import React from "react";
import Classes from "./Registration.module.css";
import Registration from "./Registration";
import {connect} from "react-redux";
import {compose} from "redux";
import {afterRegisterUserRedirect} from "../../hoc/afterRegisterUserRedirect";
import {userLoadRegistration} from "../../redux/authReducer";

const RegistrationContainer = (props) => {
    return (
      <div className={Classes.Registration}>
            <Registration {...props} />
      </div>
    );
};

const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching
});

export default compose(
    connect(mapStateToProps, {
        userLoadRegistration
    }),
    afterRegisterUserRedirect
)(RegistrationContainer);