import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const CrewContentStyle = styled.div(() => [
  tw`relative flex flex-col flex-grow justify-start items-center w-full gap-[32px] sm:gap-[40px] lg:flex-row sm:justify-between lg:items-start`,
]);

export const ImageContainer = styled.div(() => [
  tw`box-border h-[223px] w-full flex flex-col justify-center items-center border-b-[1px] border-[var(--lineColor)] overflow-hidden lg:overflow-visible sm:order-2 sm:h-[532px] sm:border-0 lg:h-full lg:absolute lg:right-[-100px] lg:w-[616px] z-[-1]`,
]);

export const CrewImage = styled(motion.img)(() => [tw`h-full`]);

export const CrewText = styled.div(() => [
  tw`flex flex-col justify-center items-center gap-[32px] text-center sm:px-[30px] sm:order-1 lg:items-start lg:text-left lg:p-0 lg:w-max lg:gap-[88px]`,
]);

export const SubMenuStyle = styled.div(() => [
  tw`flex gap-[16px] flex-row justify-center items-center sm:order-2 lg:gap-[24px] lg:mb-[64px]`,
]);

export const SubMenuItemStyle = styled.button(({ isActive }) => [
  tw`flex w-[10px] h-[10px] bg-[var(--white)] opacity-20 rounded-full hover:opacity-50 lg:w-[15px] lg:h-[15px]`,
  isActive && tw`opacity-100 hover:opacity-100`,
]);

export const CrewTitle = styled.h4(() => [
  tw`opacity-50 mb-[8px] lg:mb-[15px] lg:mt-[94px]`,
]);

export const CrewDesc = styled.p(() => [
  tw`mt-[16px] lg:mt-[27px] lg:max-w-[444px] lg:min-h-[160px]`,
]);
