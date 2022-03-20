import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Application/redux_store";
import { uiactions } from "../../Application/UIstate/uistate";
import { DialogBody } from "./dialog_body/dialog_body";
import { DialogHead } from "./dialog_head/dialog_head";
import { DialogTail } from "./dialog_tail/dialog_tail";
import { dialogActions } from "../../Application/dialoge/dialoge_slice";
import { getPhamarcys } from "../../Application/dialoge/dialog_extreducers";
const use = makeStyles({
  dialogContent: {
    width: "540px",
    height: "560px",
    background:
      " linear-gradient(0deg, rgba(229, 237, 249, 0.35), rgba(229, 237, 249, 0.35)), #FFFFFF",
    boxShadow: " 0px 6px 12px rgba(0, 0, 0, 0.12)",
    borderRadius: " 3px",
  },
  dialogTitle: {
    background: " #FFFFFF",
    boxShadow: " inset 0px -1px 0px #E4E7ED",
    borderRadius: " 2px 2px 0px 0px",
    width: "600px",
    height: "40px",
  },
});
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    paddingTop: "0px",
    paddingRight: "30px",
    paddingLeft: "30px",
    paddingBottom: "30px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(0),
  },
  "& .MuiDialogTitle-root": {
    padding: theme.spacing(0),
  },
}));

export default function PharmacyDialog() {
  const open = useSelector((state: RootState) => state.ui.open);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPhamarcys());
    console.log("narra");
  }, []);

  const style = use();
  return (
    <div>
      <StyledDialog open={open}>
        <DialogTitle className={style.dialogTitle}>
          <DialogHead />
        </DialogTitle>

        <DialogContent className={style.dialogContent}>
          <DialogBody />
        </DialogContent>

        <DialogActions>
          <DialogTail />
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
