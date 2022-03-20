import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { uiactions } from "../../../Application/UIstate/uistate";
export const PButton: React.FC = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(
            uiactions.toggleDialoge({
              open: true,
            })
          );
        }}
      >
        Open dialog
      </Button>
    </React.Fragment>
  );
};
