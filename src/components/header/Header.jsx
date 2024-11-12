import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo-cont">
          <img src={logo} alt="Headless Pizza" />
        </div>
        <div className="header__search">
          <input
            placeholder="Search for your favorite Pizza"
            className="header__search-input"
          />
          <div className="header__search-submit">
            <i className="bx bx-search-alt-2"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
