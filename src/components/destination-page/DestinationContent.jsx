import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { dest_data } from "./dest_data";
import {
  Description,
  DestinationContentStyle,
  DestinationImage,
  DestinationText,
  Line,
  Stats,
  StatsItemStyle,
  SubMenuItemStyle,
  SubMenuStyle,
  Title,
} from "./DestinationPageStyles";

const DestinationContent = () => {
  const [destinationMenu, setDestinationMenu] = useState(dest_data.moon);

  const ChangeDestination = (e) => {
    switch (e.target.value) {
      case "MOON":
        setDestinationMenu(dest_data.moon);
        break;
      case "MARS":
        setDestinationMenu(dest_data.mars);
        break;
      case "EUROPA":
        setDestinationMenu(dest_data.europa);
        break;
      case "TITAN":
        setDestinationMenu(dest_data.titan);
        break;
      default:
        setDestinationMenu(dest_data.moon);
        break;
    }
  };

  const container = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const animateItem = {
    hidden: { opacity: 0, transition: { duration: 0.8 } },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const destinationItems = ["MOON", "MARS", "EUROPA", "TITAN"];

  return (
    <DestinationContentStyle>
      <AnimatePresence exitBeforeEnter>
        <DestinationImage
          src={destinationMenu.image}
          alt={destinationMenu.title}
          key={`image-${destinationMenu.title}`}
          variants={animateItem}
          initial="hidden"
          animate="visible"
          exit="hidden"
        />
      </AnimatePresence>
      <DestinationText>
        <SubMenuStyle>
          {destinationItems.map((item) => {
            return (
              <SubMenuItemStyle key={`submenuitem-${item}`}>
                <button
                  className={`subNavText ${
                    destinationMenu.title === item ? "active" : ""
                  }`}
                  value={item}
                  onClick={ChangeDestination}
                >
                  {item}
                </button>
              </SubMenuItemStyle>
            );
          })}
        </SubMenuStyle>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={`container-${destinationMenu.title}`}
          >
            <Title>{destinationMenu.title}</Title>
            <Description>{destinationMenu.desc}</Description>
            <Line />
            <Stats>
              <StatsItemStyle className="avg_distance">
                <p className="subH2">AVG. DISTANCE</p>
                <p className="subH1">{destinationMenu.avg_distance}</p>
              </StatsItemStyle>
              <StatsItemStyle className="travel_time">
                <p className="subH2">EST. TRAVEL TIME</p>
                <p className="subH1">{destinationMenu.travel_time}</p>
              </StatsItemStyle>
            </Stats>
          </motion.div>
        </AnimatePresence>
      </DestinationText>
    </DestinationContentStyle>
  );
};

export default DestinationContent;
