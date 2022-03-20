import { ThemeProvider } from "@emotion/react";
import { Grid } from "@mui/material";
import React from "react";
import { Spacer } from "../../common/spacers";
import { PharmacyDataList } from "./data_view/data_view";
import { InputField } from "./input_fields/components/input_field";
import { InputFieldSet } from "./input_fields/input_field_set";
export const DialogBody: React.FC = (props) => {
  return (
    <React.Fragment>
      <InputFieldSet />
      <Spacer height="20px" />
      <PharmacyDataList />
    </React.Fragment>
  );
};
