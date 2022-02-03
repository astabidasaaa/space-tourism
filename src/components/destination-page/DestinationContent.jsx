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
} from "./DestinationPageStyles";

const DestinationContent = () => {
  const [destinationMenu, setDestinationMenu] = useState(dest_data["Moon"]);

  const changeDestination = (e) => {
    setDestinationMenu(dest_data[e.target.value]);
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
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const destinationItems = ["Moon", "Mars", "Europa", "Titan"];

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
          whileHover={{
            y: ["0%", "-10%", "0%"],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatDelay: 0,
            },
          }}
        />
      </AnimatePresence>
      <DestinationText>
        <SubMenuStyle>
          {destinationItems.map((item) => {
            return (
              <SubMenuItemStyle key={`submenuitem-${item}`}>
                <button
                  className={`subNavText ${
                    item === destinationMenu.title ? "active" : ""
                  }`}
                  value={item}
                  onClick={changeDestination}
                >
                  {item.toUpperCase()}
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
            <h2>{destinationMenu.title.toUpperCase()}</h2>
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
