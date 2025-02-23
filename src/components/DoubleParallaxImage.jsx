import React from "react";
import ParallaxImage from "./ParallaxImage";
import styled from "styled-components";
import { motion } from "framer-motion";

const DoubleParallaxImage = ({
  nativeImages,
  browserImages,
  backgroundColor,
  color,
  invertedColors,
  doubleRepo,
  isSwitchActive,
}) => {
  const slideVariants = {
    nativeView: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    browserView: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const browserSlideVariants = {
    nativeView: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    browserView: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    hidden: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <ViewContainer>
      <ParallaxWrapper>
        <MotionWrapper
          variants={slideVariants}
          animate={isSwitchActive ? "browserView" : "nativeView"}
          initial="nativeView"
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
        </MotionWrapper>
        <MotionWrapper
          variants={browserSlideVariants}
          animate={isSwitchActive ? "browserView" : "nativeView"}
          initial="hidden"
          isSwitchActive={isSwitchActive}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            right: isSwitchActive ? "5em" : "0",
          }}
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
        </MotionWrapper>
      </ParallaxWrapper>
    </ViewContainer>
  );
};

const ViewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding-top: 1vh;
`;

const MotionWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  right: ${(props) => (props.isSwitchActive ? "5em" : "0")};

  @media (max-width: 768px) and (min-width: 320px) {
    right: ${(props) => (props.isSwitchActive ? "0" : "3em")};
    left: -2.5em;
  }
`;

const ParallaxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 15vh);
  overflow: hidden;
`;

export default DoubleParallaxImage;
