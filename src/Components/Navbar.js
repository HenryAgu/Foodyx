// stylesheet
import "./Navbar.css";

// Navlink
import { NavLink } from "react-router-dom";

// Images
import logo from "../Images/Logo.svg";
import globe from "../Images/Globe.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <header>
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="left-side">
            <img src={globe} alt="globe" />
            <NavLink to="/">
              <button>Get started</button>
            </NavLink>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
