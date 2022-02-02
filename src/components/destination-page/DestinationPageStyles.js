import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const DestinationContentStyle = styled.div(() => [
  tw`relative flex flex-col justify-between items-center w-full gap-[26px] sm:gap-[53px] lg:flex-row lg:justify-between lg:items-end`,
]);

export const DestinationImage = styled(motion.img)(() => [
  tw`w-[170px] h-[170px] sm:w-[300px] sm:h-[300px] lg:w-[445px] lg:h-[445px] lg:mx-[64px]`,
]);

export const SubMenuStyle = styled.div(() => [
  tw`flex flex-row gap-[27px] sm:gap-[36px] mb-[20px] sm:mb-[32px] lg:mb-[37px] w-full justify-center lg:justify-start`,
]);

export const SubMenuItemStyle = styled.div(() => [
  tw`relative h-full py-[12px]`,
]);

export const DestinationText = styled(motion.div)(() => [
  tw`flex flex-col justify-start items-start sm:px-[60px] lg:px-0 lg:max-w-[445px]`,
]);

export const Title = styled.h2(() => [tw`text-center lg:text-left`]);

export const Description = styled.p(() => [
  tw`text-center sm:mt-[8px] lg:text-left lg:mt-[14px] lg:mb-[54px]`,
]);

export const Stats = styled.div(() => [
  tw`flex flex-col gap-[32px] justify-between items-center w-full sm:flex-row sm:gap-0`,
]);

export const StatsItemStyle = styled.div(() => [
  tw`w-1/2 text-center lg:text-left`,
]);

export const Line = styled.hr(() => [
  tw`w-full h-[1px] border-0 bg-[var(--lineColor)] my-[32px] sm:mt-[50px] sm:mb-[28px] lg:my-[16px]`,
]);
