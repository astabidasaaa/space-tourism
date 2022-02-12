import { Link } from "gatsby";
import React, { useContext } from "react";
import {
  MenuBg,
  MenuItemStyle,
  MenuNumber,
  NavStyles,
} from "../styles/HeaderStyles";
import MenuContext from "./MenuContext";

const navMenu = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "DESTINATION",
    url: "/destination",
  },
  {
    title: "CREW",
    url: "/crew",
  },
  {
    title: "TECHNOLOGY",
    url: "/technology",
  },
];

const Navigation = () => {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav([]);
  };

  return (
    <NavStyles {...{ isOpen }}>
      <MenuBg />
      {navMenu.map((menuItem, i) => {
        return (
          <MenuItemStyle key={`menuItem-${menuItem.title}`}>
            <Link
              to={menuItem.url}
              className="navText"
              activeClassName="active"
              onClick={toggleNav}
            >
              <MenuNumber>{`0${i}`}</MenuNumber>
              {menuItem.title}
            </Link>
          </MenuItemStyle>
        );
      })}
    </NavStyles>
  );
};

export default Navigation;
