import React from "react";
import "./Mess.css";
import moment from "moment";
import Preloader from "../Preloader/Preloader";

const Mess = (props) => {
    const isCurrentUsersMess = props.authUserId === props.senderId ? "mess__wrapper--current-user" : "";
    const dataCreated = moment(props.dateCreated).format("MM.DD.YYYY h:mm A");
    return (
        <div className={`${isCurrentUsersMess} mess__wrapper`}>
            <div className={"mess"}>
                <div className={"mess__date-created"}>{dataCreated}</div>
                <div className={"mess__content"}>
                    {
                        props?.isLoading && props?.isLoading
                            ? <span className={"mess__loader"}><Preloader/></span>
                            : ""
                    }
                    {props.content}
                </div>
            </div>
        </div>
    );
};

export default Mess;