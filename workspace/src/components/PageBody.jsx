import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion as m, motion, useScroll } from "framer-motion";
import { useCardContext } from "../context/CardContext";
import PageNavigationButton from "./PageNavigationButton";
import ParallaxImage from "./ParallaxImage";
import ProjectDescription from "./ProjectDescription";
import CustomSwitch from "./CustomSwitch";

function PageBody({
  title,
  descriptions,
  repos,
  nativeImages = [],
  browserImages = [],
  isNative,
  isBrowser,
  invertedColors,
}) {
  const [isSwitchActive, setIsSwitchActive] = useState(isNative);
  const { card } = useCardContext();

  const currentPath = window.location.pathname.replace("/", "");
  const currentCard = card.find((item) => item.path === currentPath) || card[0];
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;
  const shadowColor = currentCard.shadow;

  const showSwitch = isNative && isBrowser;

  const handleSwitchToggle = () => {
    setIsSwitchActive(!isSwitchActive);
  };

  return (
    <Body backgroundColor={backgroundColor}>
      <Content color={color}>
        <TitleContainer>
          <PageNavigationButton title={title} shadowColor={shadowColor} />
        </TitleContainer>
        <ContentGroup>
          <ProjectDescription
            descriptions={descriptions}
            repos={repos}
            color={color}
            backgroundColor={backgroundColor}
          />
          {showSwitch && (
            <SwitchWrapper>
              <CustomSwitch
                isActive={isSwitchActive}
                onToggle={handleSwitchToggle}
                color={color}
              />
            </SwitchWrapper>
          )}
          <ImageContainer>
            <ParallaxImage
              images={isSwitchActive ? nativeImages : browserImages}
              backgroundColor={backgroundColor}
              color={color}
              invertedColors={invertedColors}
              isNative={isSwitchActive}
            />
          </ImageContainer>
        </ContentGroup>
      </Content>
    </Body>
  );
}

const fadein = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const Body = styled(m.div)`
  position: relative;
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0 0 0 0;

  @media (max-width: 1024px) {
    gap: 5vh;
  }

  @media (max-width: 768px) {
    margin: 50px 0 0 0;
    padding: 0;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  animation: ${fadein} 0.8s forwards;
  position: relative;

  color: ${(props) => props.color};

  @media (max-width: 1024px) {
    width: 95%;
    padding-top: 50px;
    margin: 0 10px 0 0;
    gap: 20px;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 50px;
    margin: 0 10px 0 0;
    gap: 20px;
  }
`;

const ContentGroup = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 100px);
  align-items: flex-start;
  justify-content: start;
  flex-direction: row;
  margin-left: 10vw;
  gap: 2em;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  pointer-events: none;
  z-index: 1;

  & > * {
    pointer-events: auto;
  }
`;

const SwitchWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export default PageBody;
