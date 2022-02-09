import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { tech_data } from "./tech_data";
import {
  ImageContainer,
  SubMenuItemStyle,
  SubMenuStyle,
  SubMenuText,
  TechDesc,
  TechImage,
  TechnologyContentStyle,
  TechText,
  TechTitle,
} from "./TechnologyPageStyles";

const techItems = ["Launch Vehicle", "Spaceport", "Space Capsule"];

const TechnologyContent = () => {
  const [techMenu, setTechMenu] = useState(tech_data["Launch Vehicle"]);
  const [techName, setTechName] = useState("Launch Vehicle");

  // handleclick button
  const changeTech = (e) => {
    setTechName(e.target.value);
  };

  useEffect(() => {
    setTechMenu(tech_data[techName]);
  }, [techName]);

  const container = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.8,
      },
    },
  };

  const animateItem = {
    hidden: { y: "100%", transition: { duration: 0.4 } },
    visible: {
      y: "0%",
      transition: {
        duration: 0.4,
        delay: 0.5,
      },
    },
  };

  return (
    <TechnologyContentStyle>
      <ImageContainer>
        <AnimatePresence exitBeforeEnter>
          <TechImage
            src={techMenu.image}
            alt={techMenu.name}
            key={`image-${techMenu.name}`}
            variants={animateItem}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </AnimatePresence>
      </ImageContainer>
      <TechText>
        <SubMenuStyle>
          {techItems.map((item, index) => {
            return (
              <SubMenuItemStyle
                key={`submenuitem-${item}`}
                value={item}
                isActive={item === techMenu.name}
                onClick={changeTech}
              >
                <SubMenuText>{index + 1}</SubMenuText>
              </SubMenuItemStyle>
            );
          })}
        </SubMenuStyle>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={`container-${techMenu.name}`}
            className="grab"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <TechTitle className="tech-title">THE TERMINOLOGY…</TechTitle>
            <h3>{techMenu.name.toUpperCase()}</h3>
            <TechDesc>{techMenu.desc}</TechDesc>
          </motion.div>
        </AnimatePresence>
      </TechText>
    </TechnologyContentStyle>
  );
};

export default TechnologyContent;
