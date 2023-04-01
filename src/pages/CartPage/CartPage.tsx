import { useParams } from "react-router-dom";
import "./CartPage.scss";
import { Product } from "../../apiServices/productService/types";
import { useEffect, useState } from "react";
import { getCart } from "../../apiServices/cartService/getCart";

const CartPage = () => {
  const { id } = useParams();

  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    getCart(Number(id)).then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <>
      {products && (
        <div className="cart-page__container">
          <h1>In cart number {id} there are products: </h1>
          
          {/* {products.map((product: Product) => {
            return <p>{product.title}</p>;
          })} */}
        </div>
      )}
    </>
  );
};

export default CartPage;
