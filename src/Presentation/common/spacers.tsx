import { height } from "@mui/system";
import React from "react";
import { Column } from "./column";
export const Spacer: React.FC<{
  width?: string | undefined;
  height?: string | undefined;
}> = (props) => {
  return (
    <div
      style={{
        height: props.height ?? "0px",
        width: props.width ?? "0px",
      }}
    ></div>
  );
};
