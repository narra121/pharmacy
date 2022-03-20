import { styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { SavePharmacyDetails } from "../../../Application/dialoge/dialog_extreducers";
import { CenteredDiv } from "../../common/centered_div";
import { Row } from "../../common/row";
import { Spacer } from "../../common/spacers";
import { ShowState } from "./components/show_api_state";

const usestyles = makeStyles({
  bgrec: {
    background: " #FFFFFF",
    boxShadow: " inset 0px 1px 0px #E4E7ED",
    borderRadius: " 0px 0px 3px 3px",
    width: " 600px",
    height: " 50px",
  },
  cancel: {
    background: " #FFFFFF",
    boxShadow: " inset 0px 0px 0px 1px #007CBE",
    borderRadius: " 4px",
    width: " 70px",
    height: " 30px",
  },
  searchPharmacy: {
    width: " 114px",
    height: " 30px",
    background:
      " linear-gradient(0deg, #007CBE, #007CBE), linear-gradient(0deg, rgba(228, 228, 222, 0.5), rgba(228, 228, 222, 0.5)), #FFFFFF",
    borderRadius: " 4px",
    marginRight: "20px",
  },
  searchPharmacybutton: {
    fontFamily: " Roboto",
    fontStyle: " normal",
    fontWeight: " normal",
    fontSize: " 12px",
    lineHeight: " 14px",

    color: " #FFFFFF",
  },
  cancelButton: {
    fontFamily: " Roboto",
    fontStyle: " normal",
    fontWeight: " normal",
    fontSize: " 12px",
    lineHeight: " 14px",
    color: "#007CBE",
  },
});

export const DialogTail: React.FC = (props) => {
  const dispatch = useDispatch();
  const style = usestyles();
  return (
    <Row
      style={{
        justifyContent: "space-between",
      }}
    >
      <ShowState />
      <Row className={style.bgrec} style={{ justifyContent: "end" }}>
        <CenteredDiv className={style.cancel}>
          <Typography className={style.cancelButton}>cancel</Typography>
        </CenteredDiv>
        <Spacer width="15px" />
        <CenteredDiv
          className={style.searchPharmacy}
          onClick={() => {
            dispatch(SavePharmacyDetails());
          }}
        >
          <Typography className={style.searchPharmacybutton}>
            Search Pharmacy
          </Typography>
        </CenteredDiv>
      </Row>
    </Row>
  );
};
