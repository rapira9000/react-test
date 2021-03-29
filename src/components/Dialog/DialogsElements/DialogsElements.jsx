import React from "react";
import Classes from "./DialogsElements.module.css";

const DialogsElements = (props) => {
    return (
      <div className={Classes.DialogsElements}>
          {props.name}
      </div>
    );
};

export default DialogsElements;