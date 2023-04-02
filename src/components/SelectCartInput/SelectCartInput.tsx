import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Cart, DeleteCart } from "../../apiServices/cartService/types";
import { FormikProps } from "formik";

const SelectCartInput = ({ formik, carts }: { formik: FormikProps<DeleteCart>; carts: Cart[] }) => {
  return (
    <FormControl>
      <InputLabel id="id-select-cart">Select a cart</InputLabel>
      <Select
        labelId="id-select-cart"
        id="id-select-cart"
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
