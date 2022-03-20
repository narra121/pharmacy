import { Grid } from "@mui/material";
import React from "react";
import pharmacySvg from "../assests/pharmacy.svg";
export const PharmacyLogo: React.FC = (props) => {
  return (
    <React.Fragment>
      <img src={pharmacySvg} alt="React Logo" style={{ padding: "10px" }} />
    </React.Fragment>
  );
};
