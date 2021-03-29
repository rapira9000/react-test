import React from "react";
import Classes from "./ProfileInfo.module.css";
import Preloader from "../Preloader/Preloader";
import FormInputContainer from "../FormInput/FormInputContainer";
import AvatarContainer from "../Avatar/AvatarContainer";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    return (
        <>
            <div className={Classes.showcase_image_wrapper}>
                <img
                    className={Classes.showcase_image}
                    alt=""
                    src="https://image.shutterstock.com/image-photo/western-ghats-kerala-natural-beauty-260nw-1706538901.jpg"
                />
            </div>
            <div className={Classes.user_data}>
                <div className={Classes.avatar}>
                    <AvatarContainer/>
                </div>
                <div className={Classes.user_info}>
                    <FormInputContainer inputsData={props.userProfile}/>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;