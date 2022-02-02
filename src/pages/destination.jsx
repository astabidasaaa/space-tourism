import React from "react";
import DestinationContent from "../components/destination-page/DestinationContent";
import destinationBg from "../images/destination-bg.png";
import {
  BackgroundImg,
  MainSection,
  PageNumber,
  PageTitle,
} from "../styles/MainSection";

const destination = () => {
  return (
    <MainSection page="destination">
      <BackgroundImg backgroundImage={destinationBg} />
      <PageTitle>
        <PageNumber>01</PageNumber> PICK YOUR DESTINATION
      </PageTitle>
      <DestinationContent />
    </MainSection>
  );
};

export default destination;
