import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion as m, motion, useScroll } from "framer-motion";
import { useCardContext } from "../context/CardContext";
import PageNavigationButton from "./PageNavigationButton";
import ParallaxImage from "./ParallaxImage";
import ProjectDescription from "./ProjectDescription";
import CustomButton from "./CustomButton";
import DoubleParallaxImage from "./DoubleParallaxImage";

function PageBody({
  title,
  descriptions,
  repos,
  nativeRepo,
  browserRepo,
  website,
  nativeImages = [],
  browserImages = [],
  isNative,
  isBrowser,
  showSwitch,
  invertedColors,
}) {
  const [doubleRepo, setDoubleRepo] = useState(false);
  const [isSwitchActive, setIsSwitchActive] = useState(false);
  
  const { card } = useCardContext();

  const currentPath = window.location.pathname.replace("/", "");
  const currentCard = card.find((item) => item.path === currentPath) || card[0];
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;
  const shadowColor = currentCard.shadow;


  useEffect(() => {
    setDoubleRepo(isNative && isBrowser);
  }, [isNative, isBrowser])

  const handleSwitchView = () => {
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
            showViewSwitch={isNative && isBrowser}
            onSwitchView={handleSwitchView}
            isSwitchActive={isSwitchActive}
          />
          <ImageContainer>
            {isNative && isBrowser ? (
              <ViewContainer>
                <DoubleParallaxImage
                  nativeImages={nativeImages}
                  browserImages={browserImages}
                  backgroundColor={backgroundColor}
                  color={color}
                  invertedColors={invertedColors}
                  doubleRepo={doubleRepo}
                  isSwitchActive={isSwitchActive}
                />            
              </ViewContainer>
            ) : (
              <ParallaxImage
                images={isNative ? nativeImages : browserImages}
                backgroundColor={backgroundColor}
                color={color}
                invertedColors={invertedColors}
                isNative={isNative}
              />
            )}
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
  z-index: 105;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ViewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;

`;

const ImageContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  & > * {
    pointer-events: auto;
  }
`;


export default PageBody;
