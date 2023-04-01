import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Product } from "../../apiServices/productService/types";

const SelectProductInput = ({
  formik,
  products,
}: {
  formik: any;
  products: Product[];
}) => {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-disabled-label">
        Select a product
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="productId"
        value={formik.values.productId}
        label="Products"
        onChange={formik.handleChange}
        error={Boolean(formik.touched.productId && formik.errors.productId)}
        onBlur={formik.handleBlur}
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
