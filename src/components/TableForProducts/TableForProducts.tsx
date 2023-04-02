import { Product } from "../../apiServices/productService/types";

const TableForProducts = ({products} : {products:Product[]}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Products</th>
          <th>Price before discount</th>
          <th>Price after discount</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: Product) => {
          return (
            <tr key={product.id}>
              <th>{product.title}</th>
              <th style={{ color: "var(--red)" }}>{product.price}</th>
              <th style={{ color: "var(--blue)" }}>
                {String(product.discountedPrice / product.quantity).slice(0, 5)}
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableForProducts;
