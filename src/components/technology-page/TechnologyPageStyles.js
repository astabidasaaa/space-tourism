import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const TechnologyContentStyle = styled.div(() => [
  tw`relative flex flex-col justify-between items-center w-full gap-[26px] sm:gap-[53px] lg:flex-row lg:justify-between lg:items-center`,
]);

export const ImageContainer = styled.div(() => [
  tw`overflow-y-hidden w-screen h-[170px] sm:h-[310px] lg:h-[527px] lg:w-[515px] lg:order-2`,
]);
export const TechImage = styled(motion.img)(() => [
  tw`w-full h-full object-cover object-[center 70%]`,
]);
export const TechText = styled.div(() => [
  tw`flex flex-col justify-center items-center gap-[32px] text-center sm:px-[112px] lg:order-1 lg:flex-row lg:items-start lg:text-left lg:p-0 lg:w-max lg:gap-[80px]`,
]);
export const SubMenuStyle = styled.div(() => [
  tw`flex gap-[16px] flex-row justify-center items-center lg:gap-[32px] lg:mb-[64px] lg:flex-col`,
]);
export const SubMenuItemStyle = styled.button(({ isActive }) => [
  tw`box-border flex justify-center items-center rounded-full border border-[var(--whiteTrasnpMin)] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] hover:border-[var(--white)]`,
  isActive && tw`border-0 bg-[var(--white)] text-[var(--darkBlue)]`,
]);

export const SubMenuText = styled.h4(() => [
  tw`select-none pointer-events-none`,
]);

export const TechTitle = styled.p(() => [
  tw`mb-[8px] sm:mb-[16px] lg:mb-[11px] `,
]);
export const TechDesc = styled.p(() => [
  tw`mt-[16px] lg:max-w-[444px] lg:min-h-[160px]`,
]);
