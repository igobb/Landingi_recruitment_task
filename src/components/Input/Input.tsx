import { TextField } from "@mui/material";
import { FormikProps } from "formik/dist/types";

function Input<T>({
  formik,
  label,
  name,
  inputType,
}: {
  formik: FormikProps<T>;
  label: string;
  name: keyof T;
  inputType: string;
}) {
  return (
    <TextField
      inputProps={{ type: { inputType } }}
      error={Boolean(formik.touched[name] && formik.errors[name])}
      helperText={
        formik.touched[name] && formik.errors[name]
          ? (formik.errors[name] as string)
          : null
      }
      label={label}
      name={name as string}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      margin="dense"
      sx={{ backgroundColor: "primary" }}
    />
  );
}

export default Input;
