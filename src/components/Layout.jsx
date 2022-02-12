import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import tw, { styled } from "twin.macro";
import { motion, AnimatePresence } from "framer-motion";

const MainBody = styled(motion.main)(() => [
  tw`box-border flex flex-col flex-nowrap justify-end items-center flex-grow w-full h-full relative`,
]);

const Layout = ({ children }) => {
  const keyLocation = children.props.location.pathname.split("/")[1];

  return (
    <>
      <GlobalStyles />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <MainBody
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            duration: 0.4,
          }}
          className="main-body"
          key={`main-${keyLocation}`}
        >
          {children}
        </MainBody>
      </AnimatePresence>
    </>
  );
};

export default Layout;
