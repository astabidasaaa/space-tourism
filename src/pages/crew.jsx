import React from "react";
import {
  BackgroundImg,
  MainSection,
  PageNumber,
  PageTitle,
} from "../styles/MainSection";
import crewBg from "../images/crew-bg.png";
import CrewContent from "../components/crew-page/CrewContent";

const crew = () => {
  return (
    <MainSection page="crew">
      <BackgroundImg backgroundImage={crewBg} />
      <PageTitle>
        <PageNumber>02</PageNumber> MEET YOUR CREW
      </PageTitle>
      <CrewContent />
    </MainSection>
  );
};

export default crew;
