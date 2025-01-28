import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion as m, motion, useScroll } from "framer-motion";
import { useCardContext } from "../context/CardContext";
import PageNavigationButton from "./PageNavigationButton";
import ParallaxImage from "./ParallaxImage";
import ProjectDescription from "./ProjectDescription";
import CustomButton from "./CustomButton";
import DoubleParallaxImage from "./DoubleParallaxImage";
import { useNavigate } from "react-router-dom";
import { useTransitionContext } from '../context/TransitionContext';

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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const { card } = useCardContext();
  const navigate = useNavigate();
  const { setRunTransition, triggerTransition } = useTransitionContext();

  const currentPath = window.location.pathname.replace("/", "");
  const currentCard = card.find((item) => item.path === currentPath) || card[0];
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;
  const shadowColor = currentCard.shadow;

  const minSwipeDistance = 50;

  useEffect(() => {
    setDoubleRepo(isNative && isBrowser);
  }, [isNative, isBrowser])

  const handleSwitchView = () => {
    setIsSwitchActive(!isSwitchActive);
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const currentIndex = card.findIndex(item => item.path === currentPath);

    if (isLeftSwipe) {
      // Navigate to next project with transition
      setRunTransition(true);
      triggerTransition('next');
      const nextIndex = (currentIndex + 1) % card.length;
      const nextPath = card[nextIndex].path;
      
      const transitionTimeout = setTimeout(() => {
        setRunTransition(false);
        navigate(`/${nextPath}`);
      }, 800);

      return () => clearTimeout(transitionTimeout);
    }
    
    if (isRightSwipe) {
      // Navigate to previous project with transition
      setRunTransition(true);
      triggerTransition('previous');
      const previousIndex = (currentIndex - 1 + card.length) % card.length;
      const previousPath = card[previousIndex].path;
      
      const transitionTimeout = setTimeout(() => {
        setRunTransition(false);
        navigate(`/${previousPath}`);
      }, 800);

      return () => clearTimeout(transitionTimeout);
    }
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    handleSwipe();
  };

  return (
    <Body 
      backgroundColor={backgroundColor}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Content color={color}>
        <TitleContainer backgroundColor={backgroundColor}>
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

  @media (max-width: 768px) and (min-width: 321px) {
    margin: 0;
    padding: 20px 0;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
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

  @media (max-width: 768px) and (min-width: 321px) {
    height: auto;
    min-height: 100vh;
    width: 100%;
    padding-top: 20px;
    margin: 0;
    gap: 2em;
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

  @media (max-width: 768px) and (min-width: 321px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 106;
  background-color: ${(props) => props.backgroundColor};
  padding: 20px 0;

  @media (max-width: 768px) and (min-width: 321px) {
    position: relative;
    z-index: 0;
    .navigation-buttons {
      display: none;
    }
  }
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

  @media (max-width: 768px) and (min-width: 321px) {
    width: 100vw;
    height: auto;
    min-height: 100vh;
    position: relative;
    /* margin-top: 1em; */
    padding-top: 4em;
    border: 1px solid red;
  }
`;


export default PageBody;
