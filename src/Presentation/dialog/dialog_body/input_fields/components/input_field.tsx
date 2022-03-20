import { Grid } from "@mui/material";
import { padding } from "@mui/system";
import React, { useEffect, useState } from "react";
import styles from "./input_field.module.css";
import { ErrorMessage, useField, useFormikContext } from "formik";
import { useAppSelector } from "../../../../../Application/redux_store";
export const InputField: React.FC<{
  name: string;
  width: string;
  height: string;
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  nopadding?: true | undefined;
}> = (props) => {
  const pro = { name: props.name, type: "text" };
  const [field, meta] = useField(pro);
  return (
    <div
      style={{
        marginTop: "8px",
        marginRight: props.nopadding ? "0px" : "10px",
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      <label
        htmlFor={props.name}
        style={{
          //backgroundColor: "blue",
          height: "13px",
          fontSize: " 11px",
          fontFamily: " Roboto",
          fontStyle: " normal",
          fontWeight: " 400",
          lineHeight: " 13px",
          marginBottom: " 5px",
        }}
      >
        {props.label}
      </label>

      <input
        placeholder={props.name}
        autoComplete="off"
        className={styles.input}
        style={{
          paddingLeft: "5px",
          width: props.width,
          maxWidth: props.width,
          height: props.height,
        }}
        id={props.name}
        {...field}
        {...pro}
      />
      {meta.touched && meta.error ? (
        <div
          style={{
            //backgroundColor: "blue",
            height: "13px",
            fontSize: " 11px",
            fontFamily: " Roboto",
            fontStyle: " normal",
            fontWeight: " 400",
            lineHeight: " 13px",
            marginTop: "5px",
            marginBottom: "5px",
            color: "red",
          }}
        >
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};
