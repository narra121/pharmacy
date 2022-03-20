import { styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { dialogActions } from "../../../../../Application/dialoge/dialoge_slice";
import { useAppSelector } from "../../../../../Application/redux_store";
import { CenteredDiv } from "../../../../common/centered_div";
import { InputField } from "../../input_fields/components/input_field";
import searchLogo from "../assets/search.svg";
import styles from "./filter_all.module.css";
const Row = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  height: "40px",
}));
const usestyles = makeStyles({
  logo: {
    width: " 12px",
    height: " 12px",
  },
  filtertxt: {
    color: "#919191",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: " normal",
    fontSize: " 13px",
    lineHeight: " 15px",
  },
  clearsearch: {
    color: "#007CBE",
    fontFamily: " Roboto",
    fontStyle: " normal",
    fontWeight: " normal",
    fontSize: " 11px",
    lineHeight: " 13px",
    textAlign: "right",
  },
});
export const FilterAll: React.FC = (props) => {
  const filtertextvalue = useAppSelector(
    (state) => state.dialogstate.cleartext
  );
  const dispatch = useDispatch();
  const style = usestyles();
  return (
    <Row
      style={{
        justifyContent: "space-between",
      }}
    >
      {" "}
      <CenteredDiv
        style={{
          background: " #FFFFFF",
          borderRadius: " 4px",
          width: " 150px",
          height: " 28px",
          justifyContent: "start",
        }}
      >
        <Row>
          <img src={searchLogo} alt="React Logo" style={{ padding: "10px" }} />
          <input
            onChange={(e) => {
              dispatch(dialogActions.filter({ value: e.target.value }));
            }}
            value={filtertextvalue}
            placeholder="Filter..."
            autoComplete="off"
            className={styles.input}
            style={{
              width: "125px",
              maxWidth: "125px",
              height: "23px",
            }}
          />
        </Row>
      </CenteredDiv>
      <div
        onClick={() => {
          console.log("clicked");
          dispatch(dialogActions.clearfilter());
        }}
        style={{
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <Typography className={style.clearsearch}>Clear Search</Typography>
      </div>
    </Row>
  );
};
