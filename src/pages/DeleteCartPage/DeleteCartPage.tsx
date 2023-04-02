import { useEffect, useState } from "react";
import "./DeleteCartPage.scss";
import { getAllCarts } from "../../apiServices/cartService/getAllCarts";
import { Cart, DeleteCartInterface } from "../../apiServices/cartService/types";
import SelectCartInput from "../../components/SelectCartInput/SelectCartInput";
import { useFormik } from "formik";
import { deleteCart } from "../../apiServices/cartService/deleteCart";

const DeleteCartPage = () => {
  const [carts, setCarts] = useState<Cart[] | null>(null);

  useEffect(() => {
    getAllCarts().then((data) => setCarts(data));
  }, []);

  const formik = useFormik<DeleteCartInterface>({
    initialValues: {
      cartId: 1,
    },
    onSubmit: (values: DeleteCartInterface) => {
      deleteCart(values.cartId).then((data) => alert(`The cart was deleted on ${data.deletedOn.slice(0,11)}`));
    },
  });

  return (
    <>
      {carts && (
        <div className="delete-cart-page__container">
          <h1 className="page__title">Choos a Cart to delete:</h1>
          <form onSubmit={formik.handleSubmit} className="delete-cart-page__form">
            <SelectCartInput carts={carts} formik={formik} />
            <button type="submit">Delete cart</button>
          </form>
        </div>
      )}
    </>
  );
};

export default DeleteCartPage;
