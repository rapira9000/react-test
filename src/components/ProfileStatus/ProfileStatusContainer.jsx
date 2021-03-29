import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import ProfileStatus from "./ProfileStatus";
import {updateUserDescription} from "../../redux/profileReducer";

class ProfileStatusContainer extends React.Component {
    state = {
        editMode: false,
        userDescription: this.props.userDescription
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });

        this.props.updateUserDescription(this.props.userId, this.state.userDescription);

    };

    onDescriptionChange = (e) => {
        this.setState({
            userDescription: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userDescription !== this.props.userDescription) {
            this.setState({
                userDescription: this.props.userDescription
            });
        }
    }

    render() {
        return (
            <ProfileStatus
                userDescription={this.state.userDescription}
                editMode={this.state.editMode}
                activateEditMode={this.activateEditMode}
                deActivateEditMode={this.deActivateEditMode}
                onDescriptionChange={this.onDescriptionChange}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        userDescription: state.profilePage.userProfile.userDescription,
        userId: state.profilePage.userProfile._id
    }
};

export default compose(
    connect(mapStateToProps, {
        updateUserDescription
    })
)(ProfileStatusContainer);