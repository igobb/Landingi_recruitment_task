import { useNavigate } from "react-router-dom";
import { Cart } from "../../apiServices/cartService/types";

const Table = ({ carts }: { carts: Cart[] }) => {
  const navigate = useNavigate();

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
            <tr key={cart.id} onClick={() => navigate(`/cart/${cart.id}`)}>
              <th>
                {cart.id} of User {cart.userId}
              </th>
              <th style={{color: "var(--dark-blue)"}}>{cart.total}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
