import React, { useState } from "react";
import ParallaxImage from "./ParallaxImage";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const DoubleParallaxImage = ({
  nativeImages,
  browserImages,
  backgroundColor,
  color,
  invertedColors,
  doubleRepo,
}) => {
  const [isSwitchActive, setIsSwitchActive] = useState(false);

  const slideVariants = {
    nativeView: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    browserView: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const browserSlideVariants = {
    nativeView: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    browserView: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    hidden: {
      x: "100%",
      opacity: 0,
    }
  };

  return (
    <ViewContainer>
      <ButtonContainer>
        <CustomButton
          onClick={() => setIsSwitchActive(!isSwitchActive)}
          color={color}
          border
          backgroundColor={backgroundColor}
          label={isSwitchActive ? "Native View" : "Browser View"}
        />
      </ButtonContainer>
      <ParallaxWrapper>
        <motion.div
          variants={slideVariants}
          animate={isSwitchActive ? "browserView" : "nativeView"}
          initial="nativeView"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <ParallaxImage
            images={nativeImages}
            backgroundColor={backgroundColor}
            color={color}
            invertedColors={invertedColors}
            isNative={true}
            isSwitchActive={isSwitchActive}
            doubleRepo={doubleRepo}
          />
        </motion.div>
        <motion.div
          variants={browserSlideVariants}
          animate={isSwitchActive ? "browserView" : "nativeView"}
          initial="hidden"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <ParallaxImage
            images={browserImages}
            backgroundColor={backgroundColor}
            color={color}
            invertedColors={invertedColors}
            isNative={false}
            isSwitchActive={isSwitchActive}
            doubleRepo={doubleRepo}
          />
        </motion.div>
      </ParallaxWrapper>
    </ViewContainer>
  );
};

const ViewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 5vh;
  z-index: 1000;
`;

const ParallaxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default DoubleParallaxImage;
