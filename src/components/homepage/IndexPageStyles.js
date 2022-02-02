import tw, { styled, css } from "twin.macro";
import { motion } from "framer-motion";

export const HomeText = styled(motion.div)(() => [
  tw`box-border flex flex-col flex-nowrap justify-center items-center text-center gap-[16px] w-full sm:gap-[24px] lg:text-left lg:justify-center lg:items-start lg:w-2/5`,
]);

export const ExploreButton = styled.button(() => [
  tw`relative box-border rounded-full flex justify-center items-center bg-[var(--white)] w-[150px] h-[150px] sm:w-[242px] sm:h-[242px] lg:w-[274px] lg:h-[274px] before:content-[''] before:bg-[var(--white)] active:scale-90 transition duration-75 hover:before:scale-150 before:rounded-full before:backdrop-blur-xl before:w-full before:h-full before:absolute before:top-0 before:right-0 before:opacity-10 before:select-none before:pointer-events-none before:transition-transform`,
  css`
    h4 {
      @apply text-[var(--darkBlue)];
      color: var(--darkBlue);
    }
  `,
]);
