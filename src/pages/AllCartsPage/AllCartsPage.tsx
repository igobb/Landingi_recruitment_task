import { useEffect, useState } from "react";
import { getAllCarts } from "../../apiServices/cartService/getAllCarts";
import { Cart } from "../../apiServices/cartService/types";
import Table from "../../components/Table/Table";
import "./AllCartsPage.scss";

const AllCartsPage = () => {
  const [carts, setCarts] = useState<Cart[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCarts().then((data) => setCarts(data));
    setIsLoading(false);
  }, []);

  console.log(carts);

  if (isLoading) {
    return <h1>Loading...</h1>; //loading component will be here
  }
  return (
    <>
      {carts ? (
        <div className="all-carts-page__container">
          <h1 className="page__title">
            Here you can see a list of all carts available on site - click on a
            cart for more details.
          </h1>
          <div className="table__container">
            <Table carts={carts} />
          </div>
        </div>
      ) : (
        <h2>Error - we dont have any carts!</h2>
      )}
    </>
  );
};

export default AllCartsPage;
