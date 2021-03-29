import React from "react";
import Classes from "./FormErrorTooltip.module.css";

const FormErrorTooltip = (props) => {
    return (
      <div className={Classes.FormErrorTooltip}>
          {props.text}
      </div>
    );
};

export default FormErrorTooltip;