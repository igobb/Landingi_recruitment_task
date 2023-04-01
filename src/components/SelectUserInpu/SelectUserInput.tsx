import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { User } from "../../apiServices/userService/types";

const SelectUserInput = ({ formik, users }: { formik: any; users: User[] }) => {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-disabled-label">
        Select a user
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
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
