import React from "react";
import { createSlice } from "@reduxjs/toolkit";
export const uislice = createSlice({
  name: "ui",
  initialState: { open: false },
  reducers: {
    toggleDialoge(
      state,
      event: {
        payload: { open: boolean };
      }
    ) {
      state.open = event.payload.open;
    },
  },
});

export const uiactions = uislice.actions;
