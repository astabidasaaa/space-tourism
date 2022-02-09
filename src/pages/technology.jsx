import React from "react";
import { Helmet } from "react-helmet";
import {
  BackgroundImg,
  MainSection,
  PageNumber,
  PageTitle,
} from "../styles/MainSection";
import technologyBg from "../images/technology-bg.png";
import TechnologyContent from "../components/technology-page/TechnologyContent";

const technology = () => {
  return (
    <MainSection page="technology">
      <Helmet title="Space Launch 101" />
      <BackgroundImg backgroundImage={technologyBg} />
      <PageTitle>
        <PageNumber>03</PageNumber> SPACE LAUNCH 101
      </PageTitle>
      <TechnologyContent />
    </MainSection>
  );
};

export default technology;
