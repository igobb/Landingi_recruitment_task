import { Link } from "react-router-dom";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="nav__container">
      <ul className="nav__links">
        <Link to="/">
          <li className="nav__link">View all carts</li>
        </Link>
        <Link to="/addCart">
          <li className="nav__link">Add cart</li>
        </Link>
        <Link to="/deleteCart">
          <li className="nav__link">Delete cart</li>
        </Link>
      </ul>
      {!isActive ? (
        <GiHamburgerMenu
          onClick={() => setIsActive((current) => !current)}
          className="hamburger-button"
        />
      ) : (
        <AiFillCloseCircle
          onClick={() => setIsActive((current) => !current)}
          className="hamburger-button"
        />
      )}

      <ul
        className="nav__links-mobile"
        style={{ display: isActive ? "flex" : "none" }}
        onClick={() => setIsActive(false)}
      >
        <Link to="/">
          <li className="nav__link">View all carts</li>
        </Link>
        <Link to="/addCart">
          <li className="nav__link">Add cart</li>
        </Link>
        <Link to="/deleteCart">
          <li className="nav__link">Delete cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
