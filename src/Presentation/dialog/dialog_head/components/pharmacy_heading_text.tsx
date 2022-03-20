import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { flexbox } from "@mui/system";
import React from "react";
const usestyles = makeStyles({
  headtext: {
    fontFamily: " Roboto",
    fontStyle: " normal",
    fontWeight: " normal",
    fontSize: " 14px",
    lineHeight: " 16px",
    color: " #333333",
  },
});

export const PharmacyHeadingText: React.FC = (props) => {
  const style = usestyles();
  return (
    <React.Fragment>
      <Typography className={style.headtext}>Pharmacy Search</Typography>
    </React.Fragment>
  );
};
