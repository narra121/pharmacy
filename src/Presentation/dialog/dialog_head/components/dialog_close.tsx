import React from "react";
import closeIcon from "../assests/close.svg";
export const DialogClose: React.FC = (props) => {
  return (
    <React.Fragment>
      <img
        src={closeIcon}
        alt="React Logo"
        style={{
          marginRight: "12px",
        }}
      />
    </React.Fragment>
  );
};
