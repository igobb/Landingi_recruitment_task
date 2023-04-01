import { TextField } from "@mui/material";

const Input = ({ formik, label, name, inputType } : {formik:any, label:string, name:string, inputType: string,}) => {

  return (
    <TextField
    inputProps={{ type: {inputType} }}
      error={Boolean(formik.touched[name] && formik.errors[name])}
      helperText={
        formik.touched[name] && formik.errors[name] ? formik.errors[name] : null
      }
      label={label}
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      margin="dense"
      sx={{backgroundColor: 'primary'}}
    />
  );
};

export default Input;
