import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { motion as m, motion, useScroll } from "framer-motion";
import Lenis from "lenis";
import { useCardContext } from "../context/CardContext";
import { useNavigate } from "react-router-dom";
import { useTransitionContext } from "../context/TransitionContext";
import PageNavigationButton from "./PageNavigationButton";
import ProjectDescription from "./ProjectDescription";
import DoubleParallaxImage from "./DoubleParallaxImage";
import ParallaxImage from "./ParallaxImage";

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
  const [doubleRepo, setDoubleRepo] = useState(false);
  const [isSwitchActive, setIsSwitchActive] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { card } = useCardContext();
  const navigate = useNavigate();
  const { setRunTransition, triggerTransition } = useTransitionContext();

  const currentPath = window.location.pathname.replace('/My-portfolio/', '').replace('/', '');
  const currentCard = card.find((item) => item.path === currentPath) || card[0];
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;
  const shadowColor = currentCard.shadow;

  const minSwipeDistance = 50;

  const bodyRef = useRef(null);
  const contentRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    setDoubleRepo(isNative && isBrowser);
  }, [isNative, isBrowser]);

  useEffect(() => {
    const isMobile = window.matchMedia(
      "(max-width: 768px) and (min-width: 321px)"
    ).matches;

    if (isMobile && bodyRef.current) {
      const lenis = new Lenis({
        wrapper: bodyRef.current,
        content: contentRef.current,
        duration: 1.2,
        orientation: "vertical",
        smooth: true,
        smoothWheel: true,
        touchMultiplier: 2,
      });

      setLenisInstance(lenis);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (bodyRef.current) {
        setShowScrollTop(bodyRef.current.scrollTop > 300);
      }
    };

    const currentRef = bodyRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleSwitchView = () => {
    setIsSwitchActive(!isSwitchActive);
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const currentIndex = card.findIndex((item) => item.path === currentPath);

    if (isLeftSwipe) {
      setRunTransition(true);
      triggerTransition("next");
      const nextIndex = (currentIndex + 1) % card.length;
      const nextPath = card[nextIndex].path;

      const transitionTimeout = setTimeout(() => {
        setRunTransition(false);
        navigate(`/${nextPath}`);
      }, 800);

      return () => clearTimeout(transitionTimeout);
    }

    if (isRightSwipe) {
      setRunTransition(true);
      triggerTransition("previous");
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

  const scrollToTop = () => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0);
    }
  };

  return (
    <Body
      ref={bodyRef}
      backgroundColor={backgroundColor}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Content ref={contentRef} color={color}>
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
      <ScrollTopButton
        onClick={scrollToTop}
        show={showScrollTop}
        color={color}
        backgroundColor={backgroundColor}
      >
        ↑
      </ScrollTopButton>
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

const Body = styled.div`
  position: relative;
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0;

  @media (max-width: 768px) and (min-width: 321px) {
    margin: 0;
    padding: 20px 0;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    overflow: hidden;
    width: 90vw;
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
  z-index: 101;
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
    width: 90vw;
    height: auto;
    min-height: 100vh;
    position: relative;
  }
`;

const ScrollTopButton = styled.button`
  display: none;

  @media (max-width: 768px) and (min-width: 321px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    position: fixed;
    bottom: 2em;
    right: 1em;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    border: 2px solid ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    font-size: 1.5em;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 100;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export default PageBody;
