import { useFormik } from "formik";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { PButton } from "./components/Button";
import CustomizedDialogs from "../dialog/Dialog";
import PharmacyDialog from "../dialog/Dialog";

export const Main: React.FC = (props) => {
  return (
    <React.Fragment>
      <PButton />
      <PharmacyDialog />
    </React.Fragment>
  );
};
