import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { dialogSlice } from "./dialoge/dialoge_slice";
import { uislice } from "./UIstate/uistate";
export const store = configureStore({
  reducer: { ui: uislice.reducer, dialogstate: dialogSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
