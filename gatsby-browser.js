import React from "react";
import Layout from "./src/components/Layout";
import { MenuProvider } from "./src/components/MenuContext";

// export function onRouteUpdate({ location, prevLocation }) {
//   console.log("new pathname", location.pathname);
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null);
// }

export const onClientEntry = () => {
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
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <MenuProvider>{element}</MenuProvider>;
};
