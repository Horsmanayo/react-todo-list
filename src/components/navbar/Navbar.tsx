import { NavbarStyle } from "./NavbarStyle";
import webLogo from "../../assets/icons/web-logo.svg";

const Navbar = () => {
  return (
    <NavbarStyle className="flexRow flexSpaceBetween">
      {/* logo and company name */}
      <div>
        <div className="flexRow logoContainer">
          <img src={webLogo} alt="" />
          <p className="descriptionText">Africash</p>
        </div>
      </div>

      {/* nav links and buttons */}
      <div className="flexRow navLinksContainer">
        <div className="navLinks">
          <ul>
            <li className="descriptionText">About</li>
            <li className="descriptionText">Features</li>
            <li className="descriptionText">Blog</li>
            <li className="descriptionText">Contact</li>
          </ul>
        </div>
        <div className="buttonContainer flexRow alignCenter">
          <button className="descriptionText loginBtn">Login</button>
          <button className="descriptionText signUpBtn">Sign Up</button>
        </div>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
