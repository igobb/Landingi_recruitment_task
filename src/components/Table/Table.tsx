import { Link } from "react-router-dom";
import { Cart } from "../../apiServices/cartService/types";

const Table = ({ carts }: { carts: Cart[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Cart</th>
          <th>Total value</th>
        </tr>
      </thead>
      <tbody>
        {carts.map((cart: Cart) => {
          return (
            <tr key={cart.id}>
              <th>
                <Link to={`/cart/${cart.id}`}>
                  {cart.id} of User {cart.userId}
                </Link>
              </th>
              <th>{cart.total}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
