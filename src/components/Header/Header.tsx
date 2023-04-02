import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {

    const navigate = useNavigate();

    return ( <header className="header__container">
            <div className="header__logo">
                <p onClick={() => navigate("/")}>SOME LOGO</p>
            </div>
            <div className="header__navbar">
                <Navbar/>
            </div>
    </header> );
}
 
export default Header;