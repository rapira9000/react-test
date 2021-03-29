import React, {useState} from "react";
import {connect} from "react-redux";
import Avatar from "./Avatar";
import {avatarUrlSelector, userAvatarSelector} from "../../selectors/profileSelectors";
import {loadUserAvatar} from "../../redux/profileReducer";
import {generateFullImageUrl} from "../../utils/helpers";

const AvatarContainer = (props) => {
    const [btnIsVisible, setBtnVisibleStatus] = useState(false);
    const mockAvatarUrl = "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg";
    const avatarUrl = props.avatarUrl ? generateFullImageUrl(props.avatarUrl) : mockAvatarUrl;

    const showEditButton = () => {
        setBtnVisibleStatus(true);
    };

    const hideEditButton = () => {
        setBtnVisibleStatus(false);
    };

    const updateAvatarImage = (file, fileName, error) => {
        if (!error) {
            props.loadUserAvatar(file);
        }
    };

    return <Avatar {...props}
                   btnIsVisible={btnIsVisible}
                   showEditButton={showEditButton}
                   hideEditButton={hideEditButton}
                   updateAvatarImage={updateAvatarImage}
                   avatarUrl={avatarUrl}
    />;
};

const mapStateToProps = (state) => ({
    userAvatar: userAvatarSelector(state),
    avatarUrl: avatarUrlSelector(state),
});


export default connect(mapStateToProps, {
    loadUserAvatar
})(AvatarContainer);