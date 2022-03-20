import * as React from "react";
import "./loader.css";
export const ShowState: React.FC = (props) => {
  let num = 3;
  return <React.Fragment>{/* <Loading /> */}</React.Fragment>;
};

export const Loading: React.FC = (props) => {
  return (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
};
