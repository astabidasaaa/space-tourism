import tw, { styled, css } from "twin.macro";

export const MainSection = styled.section(({ page }) => [
  tw`box-border w-full h-full flex items-center justify-between flex-col flex-nowrap flex-grow overflow-hidden`,
  page === "home" &&
    tw`lg:items-end lg:justify-between lg:flex-row pt-[112px] pb-[48px] px-[24px] sm:pt-[200px] sm:pb-[90px] sm:px-[160px] lg:px-[160px] lg:pt-[160px] lg:pb-[132px]`,
  page === "destination" &&
    tw`gap-[32px] pt-[88px] pb-[60px] px-[24px] sm:gap-[60px] sm:pt-[136px] sm:pb-[62px] sm:px-[38px] lg:gap-0 lg:px-[166px] lg:pt-[212px] lg:pb-[118px]`,
  page === "crew" &&
    tw`gap-[32px] pt-[88px] pb-[80px] px-[24px] sm:gap-[60px] sm:pt-[136px] sm:pb-0 sm:px-[38px] lg:px-[166px] lg:pt-[212px] lg:pb-[0] lg:overflow-hidden`,
  page === "technology" &&
    tw`gap-[32px] pt-[88px] pb-[60px] px-[24px] sm:gap-[60px] sm:pt-[136px] sm:pb-[98px] sm:px-[38px] lg:pl-[166px] lg:pr-0 lg:pt-[212px] lg:pb-[100px]`,
  page === "404" &&
    tw`text-center lg:items-center justify-center pt-[112px] pb-[48px] px-[24px] sm:pt-[200px] sm:pb-[90px] sm:px-[160px] lg:px-[160px] lg:pt-[160px] lg:pb-[132px]`,
  page === "credit" &&
    tw`text-center lg:items-center justify-center pt-[112px] pb-[48px] px-[24px] sm:pt-[200px] sm:pb-[90px] sm:px-[160px] lg:px-[160px] lg:pt-[160px] lg:pb-[132px]`,
]);

export const BackgroundImg = styled.div(({ backgroundImage }) => [
  tw`box-border bg-cover bg-fixed bg-center select-none pointer-events-none absolute top-0 right-0 z-[-99] w-full h-full`,
  css`
    background-image: url(${backgroundImage});
  `,
]);

export const PageTitle = styled.h5(() => [tw`w-full text-center sm:text-left`]);

export const PageNumber = styled.span(() => [
  tw`inline-block font-bold p-0 opacity-25`,
]);
