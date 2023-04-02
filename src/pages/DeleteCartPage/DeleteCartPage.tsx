import { useEffect, useState } from "react";
import "./DeleteCartPage.scss";
import { getAllCarts } from "../../apiServices/cartService/getAllCarts";
import { Cart, DeleteCart, DeletedCart } from "../../apiServices/cartService/types";
import SelectCartInput from "../../components/SelectCartInput/SelectCartInput";
import { useFormik } from "formik";
import { deleteCart } from "../../apiServices/cartService/deleteCart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteCartPage = () => {
  const [carts, setCarts] = useState<Cart[] | null>(null);

  useEffect(() => {
    getAllCarts().then((data) => setCarts(data));
  }, []);

  const navigate = useNavigate();

  const notify = (data:DeletedCart) => {
    navigate("/")
    toast.success(`Cart was deleted on ${data.deletedOn.slice(0,10)}. \n All ok!`);
  };

  const formik = useFormik<DeleteCart>({
    initialValues: {
      cartId: 1,
    },
    onSubmit: (values: DeleteCart) => {
      deleteCart(values.cartId).then((data) => {
        notify(data)
      });
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
