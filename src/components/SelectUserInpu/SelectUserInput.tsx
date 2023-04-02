import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { User } from "../../apiServices/userService/types";
import { FormikProps } from "formik";
import { AddCart } from "../../apiServices/cartService/types";

const SelectUserInput = ({ formik, users }: { formik: FormikProps<AddCart>; users: User[] }) => {
  return (
    <FormControl>
      <InputLabel id="id-select-user">Select a user</InputLabel>
      <Select
        labelId="id-select-user"
        id="id-select-user"
        name="userId"
        value={formik.values.userId}
        label="Users"
        onChange={formik.handleChange}
        error={Boolean(formik.touched.userId && formik.errors.userId)}
        onBlur={formik.handleBlur}
      >
        {users.map((user: User) => {
          return (
            <MenuItem key={user.id} value={user.id}>
              {user.firstName} {user.lastName}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>
        {formik.touched.userId && formik.errors.userId
          ? formik.errors.userId
          : null}
      </FormHelperText>
    </FormControl>
  );
};

export default SelectUserInput;
