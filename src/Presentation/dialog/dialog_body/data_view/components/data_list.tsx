import { List, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { color } from "@mui/system";
import React, { useState } from "react";
import { Row } from "../../../../common/row";
import styles from "./data_list.module.css";
import dot from "../assets/dot.svg";
import { useAppSelector } from "../../../../../Application/redux_store";
import { Spacer } from "../../../../common/spacers";
import edit from "../assets/Paper.svg";
import remove from "../assets/Delete.svg";
import { useDispatch } from "react-redux";
import { DeletePharmacy } from "../../../../../Application/dialoge/dialog_extreducers";
import { dialogActions } from "../../../../../Application/dialoge/dialoge_slice";
const usestyles = makeStyles({
  bgrec: {
    background: " #FFFFFF",
    boxShadow: " 0px 0px 0px 1px #C8CFDB",
    borderRadius: " 4px",
    width: " 540px",
    height: " 210px",
  },
  typoPharmacyName: {
    fontFamily: " Roboto",
    fontStyle: " normal",
    fontWeight: " 500",
    fontSize: " 13px",
    lineHeight: " 28px",
    color: " #333333",
    paddingLeft: "16px",
  },
  typoRest: {
    fontFamily: " Roboto",
    fontStyle: " normal",
    fontWeight: " normal",
    fontSize: " 13px",
    lineHeight: " 28px",
  },
});
export const DataList: React.FC = (props) => {
  const [ishover, setishover] = useState("");
  let ListofPharmacy = [];
  ListofPharmacy = useAppSelector(
    (state) => state.dialogstate.displayPharmacyList
  );
  const dispatch = useDispatch();
  const style = usestyles();
  return (
    <div className={styles.bg}>
      {ListofPharmacy.length > 0
        ? ListofPharmacy.map((pharmacy) => {
            return (
              <Row
                onMouseOver={() => {
                  setishover(pharmacy.id);
                }}
                onMouseLeave={() => {
                  setishover("false");
                }}
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Row key={pharmacy.id}>
                  <Typography className={style.typoPharmacyName}>
                    {pharmacy.pharmacyName}
                  </Typography>
                  <img
                    src={dot}
                    alt="React Logo"
                    style={{
                      width: "3px",
                      paddingRight: "8px",
                      paddingLeft: "8px",
                    }}
                  />
                  <Typography className={style.typoRest}>
                    {`${pharmacy.phone},${pharmacy.street},${pharmacy.state},${pharmacy.city},${pharmacy.zip},`}
                  </Typography>
                </Row>
                {ishover == pharmacy.id && (
                  <Row
                    style={{
                      width: "50px",
                      height: "20px",
                      background:
                        " linear-gradient(90deg, white, rgba(229, 237, 249, 0.35)), #FFFFFF",
                    }}
                  >
                    <img
                      onClick={() => {
                        dispatch(dialogActions.editClicked({ data: pharmacy }));
                      }}
                      src={edit}
                      alt="React Logo"
                      style={{ color: "grey", width: "18px" }}
                    />
                    <Spacer width="10px" />
                    <img
                      onClick={() => {
                        dispatch(DeletePharmacy(pharmacy.id));
                      }}
                      src={remove}
                      alt="React Logo"
                      style={{
                        color: "grey",
                        width: "18px",
                        paddingRight: "5px",
                      }}
                    />
                  </Row>
                )}
              </Row>
            );
          })
        : null}
    </div>
  );
};
