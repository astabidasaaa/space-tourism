import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import tw, { styled } from "twin.macro";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const MainBody = styled(motion.main)(() => [
  tw`box-border flex flex-col flex-nowrap justify-end items-center flex-grow w-full h-full relative`,
]);

const Layout = ({ children }) => {
  const keyLocation = children.props.location.pathname.split("/")[1];
  useEffect(() => {
    const cssRules = [
      "color: #D0D6F9",
      "background: #0B0D17",
      "font-family: sans-serif",
      "font-size: 16px",
      "padding: 16px",
    ].join(";");

    console.group("author");
    console.log("%ccoded by sngkr", cssRules);
    console.log("https://sngkr.netlify.app/");
    console.log("%cFrontend Mentor Challenge", "font-weight: 900;");
    console.groupEnd("author");
  }, []);

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
