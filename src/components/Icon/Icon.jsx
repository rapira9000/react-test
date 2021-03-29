import React from "react";
import Classes from "./Icon.module.css";

const Icon = (props) => {
    return (
      <div className={Classes.Icon}>
            <img
                className={Classes[props.className] || ""}
                alt={props.alt || ""}
                title={props.title || ""}
                src={props.src || ""}
            />
      </div>
    );
};

export default Icon;