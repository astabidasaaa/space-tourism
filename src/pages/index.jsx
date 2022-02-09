import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  ExploreButton,
  HomeText,
} from "../components/homepage/IndexPageStyles";
import homeBgLandscape from "../images/home-bg-landscape.png";
import homeBgPortrait from "../images/home-bg-portrait.png";
import { BackgroundImg, MainSection } from "../styles/MainSection";

const IndexPage = () => {
  const [landscapeOrPortrait, setLandscapeOrPortrait] = useState();

  useEffect(() => {
    const updateWindowDimensions = () => {
      setLandscapeOrPortrait(window.innerWidth > 1024);
    };

    updateWindowDimensions();

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const animateItem = {
    hidden: { opacity: 0, x: "-200%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.1 } },
  };

  return (
    <MainSection page="home">
      <Helmet title="Space Tourism by sngkr" />
      <BackgroundImg
        backgroundImage={landscapeOrPortrait ? homeBgLandscape : homeBgPortrait}
      />
      <HomeText variants={container} initial="hidden" animate="visible">
        <motion.h5 variants={animateItem}>SO, YOU WANT TO TRAVEL TO</motion.h5>
        <motion.h1 variants={animateItem}>SPACE</motion.h1>
        <motion.p variants={animateItem}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </motion.p>
      </HomeText>
      <ExploreButton>
        <h4>EXPLORE</h4>
      </ExploreButton>
    </MainSection>
  );
};

export default IndexPage;
