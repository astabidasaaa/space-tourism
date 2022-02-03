import { Link } from "gatsby";
import React, { useContext } from "react";
import tw, { styled } from "twin.macro";
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

// sm: min-width 640px
// lg: min-width 1024px

const NavStyles = styled.nav(({ isOpen }) => [
  tw`box-border z-[9] translate-x-full transition-transform flex-col flex-nowrap justify-start items-start gap-10 backdrop-blur-xl w-[70%] h-screen absolute pt-[118px] px-[32px] top-0 right-0 flex sm:flex-row sm:justify-center sm:transform-none sm:items-center sm:min-w-[475px] sm:max-w-[830px] sm:w-[60%] sm:h-[96px] sm:p-0 sm:static`,
  isOpen && tw`translate-x-0 transition-transform`,
]);

const MenuItemStyle = styled.div(() => [
  tw`relative flex flex-row flex-nowrap justify-center items-center gap-2 sm:h-full`,
]);

const MenuNumber = styled.span(() => [
  tw`inline-block font-bold sm:hidden lg:inline-block p-0`,
]);

const MenuBg = styled.div(() => [
  tw`box-border w-full h-screen absolute top-0 right-0 sm:h-full absolute bg-[var(--white)] opacity-5 select-none pointer-events-none`,
]);

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
