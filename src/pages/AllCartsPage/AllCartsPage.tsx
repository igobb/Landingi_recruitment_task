import { useEffect, useState } from "react";
import { getAllCarts } from "../../apiServices/cartService/getAllCarts";
import { Cart } from "../../apiServices/cartService/types";
import Table from "../../components/Table/Table";
import "./AllCartsPage.scss";

const AllCartsPage = () => {
  const [carts, setCarts] = useState<Cart[] | null>(null);

  useEffect(() => {
    getAllCarts().then((data) => setCarts(data));
  }, []);

  return (
    <>
      {carts && (
        <div className="all-carts-page__container">
          <h1 className="page__title">
            Here you can see a list of all carts available on site - click on a
            cart for more details.
          </h1>
          <div className="table__container">
            <Table carts={carts} />
          </div>
        </div>
      )}
    </>
  );
};

export default AllCartsPage;
