import React, { useContext } from "react";
import Navigation from "./Navigation";
import Logo from "../images/space-logo.png";
import MenuContext from "./MenuContext";
import BurgerBtn from "./BurgerBtn";
import { HeaderStroke, HeaderStyle, MainLogo } from "../styles/HeaderStyles";
import { Link } from "gatsby";

const Header = () => {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav([]);
  };

  return (
    <HeaderStyle>
      <Link to="/credit">
        <MainLogo src={Logo} alt="Space Tourism logo" />
      </Link>
      <HeaderStroke />
      <Navigation />
      <BurgerBtn />
    </HeaderStyle>
  );
};

export default Header;
