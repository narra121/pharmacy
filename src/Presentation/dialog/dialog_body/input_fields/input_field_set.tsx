import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { dialogActions } from "../../../../Application/dialoge/dialoge_slice";
import { useAppSelector } from "../../../../Application/redux_store";
import { InputField } from "./components/input_field";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  SavePharmacyDetails,
  updatePharmacydetails,
} from "../../../../Application/dialoge/dialog_extreducers";
import { FormState } from "./components/form_state";
export const InputFieldSet: React.FC = (props) => {
  const dispatch = useDispatch();

  const [fieldstate, isEditing] = useAppSelector((state) => [
    state.dialogstate.currentInputFields,
    state.dialogstate.isEditing,
  ]);

  const zipRegex = RegExp(/^[0-9][0-9][0-9][0-9][0-9][0-9]$/);
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  const validate = Yup.object({
    pharmacyName: Yup.string().required("Required"),
    phone: Yup.string()
      .matches(phoneRegex, "InValid Phone")
      .required("Required"),
    fax: Yup.string().matches(phoneRegex, "InValid Phone").required("Required"),
    street: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    zip: Yup.string().required("Required").matches(zipRegex, "Invalid Zip"),
  });
  return (
    <React.Fragment>
      <Formik
        initialValues={fieldstate}
        onSubmit={(values) => {
          dispatch(dialogActions.formData({ data: values }));
          dispatch(isEditing ? updatePharmacydetails() : SavePharmacyDetails());
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <Form
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <InputField
              name="pharmacyName"
              label="Name"
              value={fieldstate.pharmacyName}
              height="28px"
              width="280px"
            />
            <InputField
              name="phone"
              label="Phone #"
              height="28px"
              value={fieldstate.phone}
              width="120px"
            />
            <InputField
              name="fax"
              label="Fax #"
              height="28px"
              width="120px"
              value={fieldstate.fax}
              nopadding
            />
            <InputField
              name="street"
              label="Street Name"
              height="28px"
              value={fieldstate.street}
              width="230px"
            />
            <InputField
              name="city"
              label="City"
              height="28px"
              value={fieldstate.city}
              width="140px"
            />
            <InputField
              name="state"
              label="State"
              height="28px"
              value={fieldstate.state}
              width="65px"
            />
            <InputField
              name="zip"
              label="ZIP"
              height="28px"
              value={fieldstate.zip}
              width="75px"
              nopadding
            />

            <Button
              type="submit"
              style={{
                fontFamily: " Roboto",
                fontStyle: " normal",
                fontWeight: " normal",
                fontSize: " 12px",
                lineHeight: " 14px",
                margin: "5px",
                color: " #FFFFFF",
                width: " 60px",
                height: " 30px",
                background: formik.isValid
                  ? " linear-gradient(0deg, #007CBE, #007CBE), linear-gradient(0deg, rgba(228, 228, 222, 0.5), rgba(228, 228, 222, 0.5)), #FFFFFF"
                  : "#97c9de",
                borderRadius: " 4px",
                marginTop: "8px",
              }}
            >
              Save
            </Button>

            <FormState />
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};
