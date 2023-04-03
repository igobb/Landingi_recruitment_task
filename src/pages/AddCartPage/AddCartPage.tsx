import { useFormik } from "formik";
import { addCart } from "../../apiServices/cartService/addCart";
import "./AddCartPage.scss";
import { addCartSchema } from "../../apiServices/cartService/validation";
import { AddCart } from "../../apiServices/cartService/types";
import { getAllProducts } from "../../apiServices/productService/getAllProducts";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../apiServices/userService/getAllUsers";
import { User } from "../../apiServices/userService/types";
import { Product } from "../../apiServices/productService/types";
import Input from "../../components/Input/Input";
import SelectUserInput from "../../components/SelectUserInpu/SelectUserInput";
import SelectProductInput from "../../components/SelectProductInput/SelectProductInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const AddCartPage = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
    getAllUsers().then((data) => setUsers(data));
    setIsLoading(false)
  }, []);
  
  const navigate = useNavigate();

  const notify = () => {
    navigate("/")
    toast.success("Cart was added! All ok!");
  };

  const formik = useFormik<AddCart>({
    initialValues: {
      userId: 1,
      productId: 1,
      productQuantity: 0,
    },
    onSubmit: (values: AddCart) => {
      addCart(values);
      notify();
    },
    validationSchema: addCartSchema,
  });
  
  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {products && users && (
        <div className="add-cart-page__container">
          <h1 className="page__title">Add a cart:</h1>
          <form onSubmit={formik.handleSubmit} className="add-cart-page__form">
            <SelectUserInput formik={formik} users={users} />
            <SelectProductInput formik={formik} products={products} />
            <Input<AddCart>
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
