import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  CrewContentStyle,
  CrewDesc,
  CrewImage,
  CrewText,
  CrewTitle,
  ImageContainer,
  SubMenuItemStyle,
  SubMenuStyle,
} from "./CrewPageStyles";
import { crew_data } from "./crew_data";

const crewItems = [
  "Douglas Hurley",
  "Mark Shuttleworth",
  "Victor Glover",
  "Anousheh Ansari",
];

const CrewContent = () => {
  const [crewMenu, setCrewMenu] = useState(crew_data["Douglas Hurley"]);
  const [crewName, setCrewName] = useState("Douglas Hurley");

  // handleclick button
  const changeCrew = (e) => {
    setCrewName(e.target.value);
  };

  useEffect(() => {
    setCrewMenu(crew_data[crewName]);
    setSlideIndex(crewItems.indexOf(crewName));
  }, [crewName]);

  const [slideIndex, setSlideIndex] = useState(crewItems.indexOf(crewName));

  useEffect(() => {
    setCrewName(crewItems[slideIndex]);
  }, [slideIndex]);

  const handleSlide = (offset) => {
    if (offset > 100) {
      nextOrPrev(slideIndex + 1);
    }

    if (offset < -100) {
      nextOrPrev(slideIndex - 1);
    }
  };

  const nextOrPrev = (n) => {
    if (n > crewItems.length - 1) {
      setSlideIndex(0);
    } else if (n < 0) {
      setSlideIndex(crewItems.length - 1);
    } else {
      setSlideIndex(n);
    }
  };

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
    <CrewContentStyle>
      <ImageContainer>
        <AnimatePresence exitBeforeEnter>
          <CrewImage
            src={crewMenu.image}
            alt={crewMenu.name}
            key={`image-${crewMenu.name}`}
            variants={animateItem}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </AnimatePresence>
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
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={`container-${crewMenu.name}`}
            className="grab"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            dragSnapToOrigin
            onDragEnd={(event, info) => handleSlide(info.offset.x)}
          >
            <CrewTitle>{crewMenu.title.toUpperCase()}</CrewTitle>
            <h3>{crewMenu.name.toUpperCase()}</h3>
            <CrewDesc>{crewMenu.desc}</CrewDesc>
          </motion.div>
        </AnimatePresence>
      </CrewText>
    </CrewContentStyle>
  );
};

export default CrewContent;
