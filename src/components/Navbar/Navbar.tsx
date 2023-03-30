import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav__container">
      <ul className="nav__links">
        <li className="nav__link">View all carts</li>
        <li className="nav__link">Add cart</li>
        <li className="nav__link">Delete cart</li>
      </ul>
    </nav>
  );
};

export default Navbar;
