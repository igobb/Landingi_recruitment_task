import { useFormik } from "formik";
import { addCart } from "../../apiServices/cartService/addCart";
import "./AddCartPage.scss";
import { addCartSchema } from "../../apiServices/cartService/validation";
import { AddCartInterface } from "../../apiServices/cartService/types";
import { getAllProducts } from "../../apiServices/productService/getAllProducts";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../apiServices/userService/getAllUsers";
import { User } from "../../apiServices/userService/types";
import { Product } from "../../apiServices/productService/types";
import Input from "../../components/Input/Input";
import SelectUserInput from "../../components/SelectUserInpu/SelectUserInput";
import SelectProductInput from "../../components/SelectProductInput/SelectProductInput";

const AddCartPage = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
    getAllUsers().then((data) => setUsers(data));
  }, []);

  const formik = useFormik<AddCartInterface>({
    initialValues: {
      userId: 1,
      productId: 1,
      productQuantity: 0,
    },
    onSubmit: (values: AddCartInterface) => {
      const createdCart = addCart(values);
      alert("All ok, Cart was added!");
      console.log(createdCart);
    },
    validationSchema: addCartSchema,
  });
  console.log(formik.values)

  return (
    <>
      {products && users && (
        <div className="add-cart-page__container">
          <form onSubmit={formik.handleSubmit} className="add-cart-page__form">
            <SelectUserInput formik={formik} users={users} />
            <SelectProductInput formik={formik} products={products} />
            <Input
              formik={formik}
              inputType="number"
              label="Quantity"
              name="productQuantity"
            />
            <button type="submit">Add Cart</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddCartPage;
