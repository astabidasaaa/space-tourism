import React, { useState } from "react";
import { crew_data } from "./crew_data";
import tw, { styled } from "twin.macro";

const CrewContentStyle = styled.div(() => [
  tw`relative flex flex-col flex-grow justify-start items-center w-full gap-[32px] sm:gap-[40px] lg:flex-row sm:justify-between lg:items-start`,
]);

const ImageContainer = styled.div(() => [
  tw`box-border h-[223px] w-full flex flex-col justify-center items-center border-b-[1px] border-[var(--lineColor)] sm:order-2 sm:h-[532px] sm:border-0 lg:h-full lg:absolute lg:right-[-100px] lg:w-[616px] z-[-1]`,
]);

const CrewImage = styled.img(() => [tw`h-full lg:h-[120%]`]);

const CrewText = styled.div(() => [
  tw`flex flex-col justify-center items-center gap-[32px] text-center sm:px-[30px] sm:order-1 lg:items-start lg:text-left lg:p-0 lg:w-max lg:gap-[88px]`,
]);

const SubMenuStyle = styled.div(() => [
  tw`flex gap-[16px] flex-row justify-center items-center sm:order-2 lg:gap-[24px] lg:mb-[64px]`,
]);

const SubMenuItemStyle = styled.button(({ isActive }) => [
  tw`flex w-[10px] h-[10px] bg-[var(--white)] opacity-20 rounded-full hover:opacity-50 lg:w-[15px] lg:h-[15px]`,
  isActive && tw`opacity-100 hover:opacity-100`,
]);

const CrewTitle = styled.h4(() => [
  tw`opacity-50 mb-[8px] lg:mb-[15px] lg:mt-[94px]`,
]);

const CrewDesc = styled.p(() => [
  tw`mt-[16px] lg:mt-[27px] lg:max-w-[444px] lg:min-h-[160px]`,
]);

const CrewContent = () => {
  const [crewMenu, setCrewMenu] = useState(crew_data["Douglas Hurley"]);

  const changeCrew = (e) => {
    setCrewMenu(crew_data[e.target.value]);
  };

  const crewItems = [
    "Douglas Hurley",
    "Mark Shuttleworth",
    "Victor Glover",
    "Anousheh Ansari",
  ];

  return (
    <CrewContentStyle>
      <ImageContainer>
        <CrewImage src={crewMenu.image} alt={crewMenu.name} />
      </ImageContainer>
      <CrewText>
        <SubMenuStyle>
          {crewItems.map((item) => {
            return (
              <SubMenuItemStyle
                key={`submenuitem-${item}`}
                value={item}
                isActive={item === crewMenu.name}
                onClick={changeCrew}
              />
            );
          })}
        </SubMenuStyle>
        <div>
          <CrewTitle>{crewMenu.title.toUpperCase()}</CrewTitle>
          <h3>{crewMenu.name.toUpperCase()}</h3>
          <CrewDesc>{crewMenu.desc}</CrewDesc>
        </div>
      </CrewText>
    </CrewContentStyle>
  );
};

export default CrewContent;
