import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
    return ( <header className="header__container">
            <div className="header__logo">
                <p>SOME LOGO</p>
            </div>
            <div className="header__navbar">
                <Navbar/>
            </div>
    </header> );
}
 
export default Header;