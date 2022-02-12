import tw, { styled } from "twin.macro";

export const HeaderStyle = styled.div(() => [
  tw`box-border w-full right-0 flex flex-row flex-nowrap justify-between items-center fixed p-[24px] sm:pr-0 sm:pl-[39px] sm:py-0 lg:pl-[55px] lg:py-[40px] z-[8]`,
]);

export const MainLogo = styled.img(() => [tw`w-[40px] sm:w-[48px]`]);

export const HeaderStroke = styled.div(() => [
  tw`box-border h-[1px] w-[30vw] left-8 bg-[var(--white)] select-none pointer-events-none opacity-25 relative z-10 hidden lg:block xl:w-[35vw] xl:left-12`,
]);

export const NavStyles = styled.nav(({ isOpen }) => [
  tw`box-border z-[9] translate-x-full transition-transform flex-col flex-nowrap justify-start items-start gap-10 backdrop-blur-xl w-[70%] h-screen absolute pt-[118px] px-[32px] top-0 right-0 flex sm:flex-row sm:justify-center sm:transform-none sm:items-center sm:min-w-[475px] sm:max-w-[830px] sm:w-[60%] sm:h-[96px] sm:p-0 sm:static`,
  isOpen && tw`translate-x-0 transition-transform`,
]);

export const MenuItemStyle = styled.div(() => [
  tw`relative flex flex-row flex-nowrap justify-center items-center gap-2 sm:h-full`,
]);

export const MenuNumber = styled.span(() => [
  tw`inline-block font-bold sm:hidden lg:inline-block p-0`,
]);

export const MenuBg = styled.div(() => [
  tw`box-border w-full h-screen absolute top-0 right-0 sm:h-full absolute bg-[var(--white)] opacity-5 select-none pointer-events-none`,
]);
