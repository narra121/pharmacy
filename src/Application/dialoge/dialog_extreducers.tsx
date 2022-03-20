import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../redux_store";
import axios from "axios";
import { dialogActions } from "./dialoge_slice";
export const SavePharmacyDetails = createAsyncThunk(
  "api/Pharmacy/save",
  async (_, { getState, dispatch, rejectWithValue }) => {
    const state = getState() as RootState;
    let response;

    const promise = new Promise(async (resolve, reject) => {
      try {
        response = await axios.post(
          "https://localhost:7163/api/Pharmacy",
          state.dialogstate.currentInputFields,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        //  getPhamarcys();
        resolve(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          reject(error.response?.data);
        }
      }
    });

    return await promise
      .then(() => {
        dispatch(getPhamarcys());
      })
      .catch((e) => {
        return rejectWithValue(e as Error);
      });
  }
);
export const updatePharmacydetails = createAsyncThunk(
  "api/Pharmacy/update",
  async (_, { getState, dispatch, rejectWithValue }) => {
    const state = getState() as RootState;
    let response;
    const promise = new Promise(async (resolve, reject) => {
      try {
        response = await axios.put(
          "https://localhost:7163/api/Pharmacy",
          state.dialogstate.currentInputFields,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        resolve(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          reject(error.response?.data);
        }
      }
    });

    return await promise
      .then(() => {
        dispatch(getPhamarcys());
      })
      .catch((e) => {
        return rejectWithValue(e as Error);
      });
  }
);
export const getPhamarcys = createAsyncThunk(
  "api/Pharmacy/get",
  async (_, { getState, dispatch }) => {
    const a = getState() as RootState;

    let response;
    try {
      response = await axios.get("https://localhost:7163/api/Pharmacy");
    } catch (error) {
      console.log(error);
    }
    console.log(response);
    return response;
  }
);
export const DeletePharmacy = createAsyncThunk(
  "api/Pharmacy/delete",
  async (id: string, { getState, dispatch }) => {
    const a = getState() as RootState;
    let response;

    const promise = new Promise(async (resolve, reject) => {
      try {
        response = await axios.delete(
          `https://localhost:7163/api/Pharmacy/${id}`
        );
        resolve(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          reject(new Error(error.response?.data.errors.message));
        }
      }
    });

    return promise.then(() => {
      dispatch(getPhamarcys());
    });
  }
);
