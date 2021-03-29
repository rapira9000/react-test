import React from "react";
import Classes from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
    return (
        <span className={Classes.ProfileStatus}>
          {
              !props.editMode
                  ? <div
                      onDoubleClick={() => {
                          props.activateEditMode()
                      }}
                      title={"press double click to edit"}>
                      <span>{props.userDescription || '----'}</span>
                  </div>
                  : <div>
                      <input
                          autoFocus={true}
                          onChange={(e) => {
                              props.onDescriptionChange(e)
                          }}
                          onBlur={() => {
                              props.deActivateEditMode()
                          }}
                          type="text"
                          value={props.userDescription}
                      />
                  </div>
          }
      </span>
    );
};

export default ProfileStatus;