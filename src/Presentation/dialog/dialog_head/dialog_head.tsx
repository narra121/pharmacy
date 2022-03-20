import { Grid, styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { style } from "@mui/system";
import React from "react";
import { DialogClose } from "./components/dialog_close";
import { PharmacyHeadingText } from "./components/pharmacy_heading_text";
import { PharmacyLogo } from "./components/pharmacy_logo";

const styles = makeStyles({
  headtext: {
    fontFamily: " Roboto",
    fontStyle: " normal",
    fontWeight: " normal",
    fontSize: " 14px",
    lineHeight: " 16px",
    width: "110px",
    height: "16px",
    color: " #333333",
  },
});
const Row = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  height: "40px",
}));

export const DialogHead: React.FC = (props) => {
  return (
    <Row
      style={{
        justifyContent: "space-between",
      }}
    >
      <Row>
        <PharmacyLogo />
        <PharmacyHeadingText />
      </Row>
      <DialogClose />
    </Row>
  );
};
