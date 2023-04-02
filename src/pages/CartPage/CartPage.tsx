import { useParams } from "react-router-dom";
import "./CartPage.scss";
import { Product } from "../../apiServices/productService/types";
import { useEffect, useState } from "react";
import { getCart } from "../../apiServices/cartService/getCart";
import LineChart from "../../components/LineChart/LineChart";
import TableForProducts from "../../components/TableForProducts/TableForProducts";

export interface ChartData {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    },
    {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }
  ];
}

const CartPage = () => {
  const { id } = useParams();

  const [products, setProducts] = useState<Product[] | null>(null);

  const productTitles = products?.map((product) => product.title);
  const productPrice = products?.map((product) => product.price);
  const productDiscountedPrice = products?.map(
    (product) => product.discountedPrice / product.quantity
  );

  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    getCart(Number(id)).then((data) => setProducts(data));
  }, []);

  useEffect(() => {
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
  }, [products]);
  console.log(products);
  return (
    <>
      {products && chartData && (
        <div className="cart-page__container">
          <LineChart chartData={chartData} />
          <div className="table__container">
            <TableForProducts products={products} />
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
