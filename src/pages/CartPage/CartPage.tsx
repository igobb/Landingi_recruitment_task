import { useParams } from "react-router-dom";
import "./CartPage.scss";
import { Product } from "../../apiServices/productService/types";
import { useEffect, useState } from "react";
import { getProductsFromCart } from "../../apiServices/cartService/getProductsFromCart";
import LineChart from "../../components/LineChart/LineChart";
import TableForProducts from "../../components/TableForProducts/TableForProducts";
import { ChartData } from "../../components/LineChart/chartData";
import Loading from "../../components/Loading/Loading";

const CartPage = () => {
  const { id } = useParams();

  const [products, setProducts] = useState<Product[] | null>(null);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProductsFromCart(Number(id)).then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const productTitles = products?.map((product) => product.title);
    const productPrice = products?.map((product) => product.price);
    const productDiscountedPrice = products?.map(
      (product) => product.discountedPrice / product.quantity
    );

    if (productTitles && productPrice && productDiscountedPrice) {
      setChartData({
        labels: productTitles,
        datasets: [
          {
            label: "Price of product",
            data: productPrice,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Price of product after discount",
            data: productDiscountedPrice,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      });
    }
    setIsLoading(false)
  }, [products]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {products && chartData && (
        <div className="cart-page__container">
          <h1>Cart #{id}</h1>
          <div className="cart-page__data">
            <LineChart chartData={chartData} />
            <div className="table__container">
              <TableForProducts products={products} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
