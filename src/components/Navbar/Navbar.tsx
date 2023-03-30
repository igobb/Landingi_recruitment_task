import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  return (
    <nav className="nav__container">
      <ul className="nav__links">
        <Link to="/"><li className="nav__link">View all carts</li></Link>
        <Link to="/addCart"><li className="nav__link">Add cart</li></Link>
        <Link to="/deleteCart"><li className="nav__link">Delete cart</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
