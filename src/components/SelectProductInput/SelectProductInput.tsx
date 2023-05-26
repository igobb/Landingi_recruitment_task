import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Product } from "../../apiServices/productService/types";
import { FormikProps } from "formik";
import { AddCart } from "../../apiServices/cartService/types";

const SelectProductInput = ({
  formik,
  products,
}: {
  formik: FormikProps<AddCart>;
  products: Product[];
}) => {
  return (
    <FormControl>
      <InputLabel id="id-select-product">Select a product</InputLabel>
      <Select
        labelId="id-select-product"
        id="id-select-product"
        name="productId"
        value={formik.values.productId}
        label="Products"
        onChange={formik.handleChange}
        error={Boolean(formik.touched.productId && formik.errors.productId)}
        onBlur={formik.handleBlur}
        data-testid="select_product_test"
      >
        {products.map((product: Product) => {
          return (
            <MenuItem key={product.id} value={product.id}>
              {product.title}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>
        {formik.touched.productId && formik.errors.productId
          ? formik.errors.productId
          : null}
      </FormHelperText>
    </FormControl>
  );
};

export default SelectProductInput;
