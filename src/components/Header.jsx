import React, { useContext, useState } from "react";
import tw, { styled, css } from "twin.macro";
import Navigation from "./Navigation";
import Logo from "../images/space-logo.png";
import MenuContext from "./MenuContext";
import BurgerBtn from "./BurgerBtn";

const HeaderStyles = styled.div(() => [
  tw`box-border w-full right-0 flex flex-row flex-nowrap justify-between items-center fixed p-[24px] sm:pr-0 sm:pl-[39px] sm:py-0 lg:pl-[55px] lg:py-[40px] z-[8]`,
]);

const MainLogo = styled.img(() => [tw`w-[40px] sm:w-[48px]`]);

const HeaderStroke = styled.div(() => [
  tw`box-border h-[1px] w-[30vw] left-8 bg-[var(--white)] select-none pointer-events-none opacity-25 relative z-10 hidden lg:block xl:w-[35vw] xl:left-12`,
]);

const Header = () => {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav([]);
  };

  return (
    <HeaderStyles>
      <MainLogo src={Logo} alt="Space Tourism logo" />
      <HeaderStroke />
      <Navigation />
      <BurgerBtn />
    </HeaderStyles>
  );
};

export default Header;
