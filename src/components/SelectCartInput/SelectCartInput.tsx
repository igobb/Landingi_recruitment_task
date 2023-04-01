import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";
  import { Cart } from "../../apiServices/cartService/types"
  
  const SelectCartInput = ({ formik, carts }: { formik: any; carts: Cart[] }) => {
    return (
      <FormControl>
        <InputLabel id="demo-simple-select-disabled-label">
          Select a cart
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="cartId"
          value={formik.values.cartId}
          label="Carts"
          onChange={formik.handleChange}
          error={Boolean(formik.touched.cartId && formik.errors.cartId)}
          onBlur={formik.handleBlur}
        >
          {carts.map((cart: Cart) => {
            return (
              <MenuItem key={cart.id} value={cart.id}>
                Cart number {cart.id} of user {cart.userId}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>
          {formik.touched.cartId && formik.errors.cartId
            ? formik.errors.cartId
            : null}
        </FormHelperText>
      </FormControl>
    );
  };
  
  export default SelectCartInput;
  