import { style } from "@mui/system";
import React from "react";
export const Column: React.FC<{ style?: object }> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {props.children}
    </div>
  );
};
