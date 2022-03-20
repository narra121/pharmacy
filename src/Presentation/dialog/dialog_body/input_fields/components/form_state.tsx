import { useFormikContext } from "formik";
import * as React from "react";
import { useAppSelector } from "../../../../../Application/redux_store";

export const FormState: React.FC = (props) => {
  const [fieldstate, isEditing] = useAppSelector((state) => [
    state.dialogstate.currentInputFields,
    state.dialogstate.isEditing,
  ]);
  const { setFieldError, setValues } = useFormikContext();
  const error = useAppSelector((state) => state.dialogstate.fromErrors);
  const deplicateNameError = useAppSelector((state) => state.dialogstate.error);
  React.useEffect(() => {
    if (deplicateNameError != "") {
      setFieldError("pharmacyName", deplicateNameError);
    }
    if (error.phone != "") {
      setFieldError("phone", error.phone);
    }
    if (error.fax != "") {
      setFieldError("fax", error.fax);
    }
    if (error.zip != "") {
      setFieldError("zip", error.zip);
    }
  }, [error, deplicateNameError]);
  React.useEffect(() => {
    if (isEditing) {
      setValues(fieldstate, true);
    }
  }, [fieldstate]);
  return <React.Fragment></React.Fragment>;
};
