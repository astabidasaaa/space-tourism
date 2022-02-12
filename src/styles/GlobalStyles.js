import React from "react";
import { createGlobalStyle } from "styled-components";
import { GlobalStyles as BaseStyles } from "twin.macro";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/400-italic.css";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/400-italic.css";
import "@fontsource/bellefair";

// sm: min-width 640px
// lg: min-width 1024px

const CustomStyles = createGlobalStyle`
  :root {
    --darkBlue: #0B0D17;
    --paleBlue: #D0D6F9;
    --white: #FFFFFF;
    --lineColor: #383B4B;
    --whiteTrasnpMin: #FFFFFF40;
    --whiteTranspMax: #FFFFFF80;

    --h1: 150px;
    --h2: 100px;
    --h3: 56px;
    --h4: 32px;
    --h5: 28px;
    --subH1: 28px;
    --subH2: 14px;
    --navText: 16px;
    --para: 18px;

    --bellefair: "Bellefair", serif;
    --barlow: "Barlow", sans-serif;
    --barlowCondensed: "Barlow Condensed", sans-serif;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      display: block;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: #00000000;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: var(--whiteTrasnpMin);
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--whiteTranspMax);
    }
  }

  html {
    min-height: 100vh;
  }
  

  body {
    height: 100%;
    min-height: 100vh;
    background-color: var(--darkBlue);
    overflow: overlay;
    color: var(--white);
  }

  body > div:first-child {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  #gatsby-focus-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  .grab {
    &:hover {
      cursor: grab;
    }

    &:active {
      cursor: grabbing;
    }
  }
`;

const Typography = createGlobalStyle`
  h1, h2, h3, h4, .subH1 {
      font-family: var(--bellefair);
      color: inherit;
  }

  h1 {
    font-size: 80px;
    line-height: 100px;

    @media screen and (min-width: 640px) {
      font-size: 150px;
      line-height: 150px;
    }

    @media screen and (min-width: 1024px) {
      line-height: 172px;
    }
  }

  h2 {
    font-size: 56px;
    line-height: 64px;

    @media screen and (min-width: 640px) {
      font-size: 80px;
      line-height: 92px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 100px;
      line-height: 115px;
    }
  }

  h3 {
    font-size: 24px;
    line-height: 28px;

    @media screen and (min-width: 640px) {
      font-size: 40px;
      line-height: 46px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 56px;
      line-height: 64px;
    }
  }

  h4 {
    font-size: 16px;
    line-height: 18px;

    @media screen and (min-width: 640px) {
      font-size: 24px;
      line-height: 28px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 32px;
      line-height: 37px;
    }
  }

  h5 {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;

    @media screen and (min-width: 640px) {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.38px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.75px;
    }
  }

  .subH1 {
      font-size: 28px;
      line-height: 32px;      
  }

  .subH2 {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.35px;
      margin: 12px 0;
  }

  .navText, .subNavText {
    box-sizing: border-box;
    display: flex;

    &:hover {
      cursor: pointer;
    }

    &:focus-visible {
      border: none;
      outline: 3px solid var(--white);
      outline-offset: 8px;
    }
  }
  
  .navText {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    gap: 11px;

    @media screen and (min-width: 640px) {
      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        height: 3px;
        width: 0;
        background: var(--whiteTranspMax);
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        &:after {
          position: absolute;
          bottom: 0;
          left: 0;
          content: "";
          height: 3px;
          width: 100%;
          background: var(--whiteTranspMax);
          transition: width 0.2s ease-in-out;
        }
      }

      &.active {
        &:after {
          position: absolute;
          bottom: 0;
          left: 0;
          content: "";
          height: 3px;
          width: 100%;
          background: var(--white);
          transition: width 0.4s ease-in-out;
        }
      }
    }

    @media screen and (min-width: 640px) and (max-width: 1023px) {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.35px;
    }
  }

  .subNavText, .tech-title { 
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.35px;

    @media screen and (min-width: 640px) {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }
  }

  .subNavText {
    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      height: 3px;
      width: 0;
      background: var(--whiteTranspMax);
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        height: 3px;
        width: 100%;
        background: var(--whiteTranspMax);
        transition: width 0.2s ease-in-out;
      }
    }

    &.active {
      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        height: 3px;
        width: 100%;
        background: var(--white);
        transition: width 0.4s ease-in-out;
      }
    }
  }

  h5, .subH2, .navText, .subNavText, .tech-title, a {
    color: var(--white);
    font-family: var(--barlowCondensed);
  }

  p {
    color: var(--paleBlue);
    font-size: 15px;
    line-height: 25px;

    @media screen and (min-width: 640px) {
      font-size: 16px;
      line-height: 28px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 18px;
      line-height: 32px;
    }
  }


  
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
    <Typography />
  </>
);

export default GlobalStyles;
