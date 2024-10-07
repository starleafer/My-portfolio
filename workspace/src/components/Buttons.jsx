import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { motion as m } from "framer-motion";
import { useCardContext } from '../context/CardContext';

function Buttons({ about }) {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [isContactActive, setIsContactActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [circleColor, setCircleColor] = useState("");

  const [fadeIn, setFadeIn] = useState(false);
  const { card } = useCardContext();
  const navigate = useNavigate();

  const currentPath = window.location.pathname.replace('/', '');
  const currentCard = card.find(item => item.path === currentPath) || card[0];
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;
  const shadow = currentCard.shadow;

  const location = useLocation();
  const email = "emil.stjernlof@gmail.com";

  useEffect(() => {
    setFadeIn(true);

    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);


  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`Email copied!`);
    setIsContactActive(true);
    setTimeout(() => {
      setIsContactActive(false);
    }, 200);
  }

  let worksclass = "";
  let aboutclass = "";
  let lightmode = "";

  if (location.pathname === "/") {
    worksclass = "mainpage";
  } else if (location.pathname === "/about") {
    aboutclass = "about";
  }

  if (location.pathname === "/movieapp") {
    lightmode = "lightmode";
  }

  const handleClick = (route, color) => {
    setIsClicked(true);
    setShowCircle(true);
    setCircleColor(color);

    const circleAnimationTimeout = setTimeout(() => {
      setIsClicked(false);
      navigate(route);
      setShowCircle(false);
    }, 800);

    return () => {
      clearTimeout(circleAnimationTimeout);
    };
  };

  return (
    <>
      {showCircle && <Circle color={isClicked ? circleColor : ""} />}
      <ButtonContainer
        path={currentPath}
        backgroundColor={backgroundColor}
        shadow={shadow}
        fadeIn={fadeIn}
      >
        {location.pathname !== "/" ? (
          <>
            <StyledButton
              path={currentPath}
              color={color}
              backgroundColor={backgroundColor}
              about={about}
              onClick={() => handleClick('/', 'white')}
              className={`${worksclass} ${lightmode}`}
            >
              Home
            </StyledButton>
          </>
        ) : null}
        {location.pathname !== "/about" ? (
          <StyledButton
            path={currentPath}
            color={color}
            backgroundColor={backgroundColor}
            about={about}
            onClick={() => handleClick('/about', 'var(--dark)')}
            className={`${aboutclass} ${lightmode}`}
          >
            About me
          </StyledButton>
        ) : null}
        <Contact className={isContactActive ? 'active' : ''}>
          <StyledButton
            path={currentPath}
            color={color}
            backgroundColor={backgroundColor}
            about={about}
            onClick={copyEmail}
            className={`clicked ${lightmode}`}
          >
            Contact
          </StyledButton>
          {copySuccessMessage && <CopyAlert className="clicked">{copySuccessMessage}</CopyAlert>}
        </Contact>
      </ButtonContainer>
    </>
  );
}

const CircleAnimation = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
}
100% {
  transform: scale(4);
  opacity: 1;
}
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideAndFadeOut = keyframes`
  0% {
    left: 0vw;
    opacity: 0;
  }
  20% {
    left: 2vw;
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const slideAndFadeOutMobile = keyframes`
  0% {
    left: -16vw;
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    right: 15%; 
    opacity: 0;
  }
`;

const ButtonContainer = styled(m.div)`
  height: 93.8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.path === '' || props.path === 'about') ? 'transparent' : props.backgroundColor};
  margin-left: 15px;
  gap: 2.5vh;
  padding: 3vh 1vw;
  position: fixed;
  left: 0;
  z-index: 1;
  opacity: 0;
  animation: ${props => props.fadeIn ? css`${fadeInAnimation} 1s forwards` : 'none'};

  @media (max-width: 768px) {
    position: fixed;
    flex-direction: row; 
    align-items: flex-start;
    height: 5vh;
    width: 88vw;
    padding: 16px 6vw;
    z-index: 1;
  }

  :last-child {
    margin-top: auto;

    @media (max-width: 768px) {
      margin: 0;
      margin-left: auto;
    }
  }
`;

const StyledButton = styled(m.button)`
  min-width: 5vw;
  height: 4vh;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 1.2em;
  font-weight: 600;
  color: ${props => props.about ? 'white' : props.color};
  background-color: ${props => props.about ? props.color : 'transparent'};
  /* background-image: linear-gradient(to right, ${props => props.about ? props.backgroundColor : props.color} 50%, transparent 50%); */
  background-size: 200% 100%;
  background-position: 100% center;
  transition: background-position 0.3s cubic-bezier(.27,-0.32,.7,1.37), color 0.3s cubic-bezier(.27,-0.32,.7,1.37), background-color 0.3s cubic-bezier(.27,-0.32,.7,1.37), transform 0.3s cubic-bezier(.27,-0.32,.7,1.37), border-color 0.3s cubic-bezier(.27,-0.32,.7,1.37);
  z-index: 1;

  @media (max-width: 1200px) {
    font-size: 0.9em;
  }

  @media (max-width: 965px) {
    font-size: 0.9em;
  }

  &.lightmode {
    color: var(--redish);
  }

  ${props => {
    const fadeInShadow = keyframes`
      0% {
        box-shadow: 0 0 0 transparent;
      }
      100% {
        box-shadow: 0.3vw 0.3vw 0 ${props.shadow};
      }
    `;

    const fadeOutShadow = keyframes`
      0% {
        box-shadow: 0.3vw 0.3vw 0 ${props.shadow};
      }
      100% {
        box-shadow: 0 0 0;
      }
    `;

    return css`
      &:hover {
        transform: translateY(-0.3vw);
        transition: transform 0.3s;
        animation: ${fadeInShadow} 0.5s ease forwards;
        border: 1px solid ${props => props.about ? 'white' : props.color};
      }

      &:not(:hover) {
        animation: ${fadeOutShadow} 0.8s;
        border-color: ${props => (props.path === '' ) ? '#fff' : 'transparent'};
      }
    `;
  }}
`;

const Contact = styled.div`
  display: flex;
  min-width: 5vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    &.active {
      background-color: var(--dark);
      color: #fff;
      border-radius: 10px;
    }
  }
`;

const CopyAlert = styled.div`
  position: absolute;
  left: 2vw;
  width: 110px;
  height: 40px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1em;
  font-family: 'Roboto Flex';
  border-radius: 10px;
  background-color: var(--darker);
  color: #fff;
  transform: translateX(100%);
  transition: transform 0.3s, color 0.3s , background-color 0.3s ;
  overflow: hidden;

  &.clicked {
    animation: ${slideAndFadeOut} 2s forwards;
    
    @media (max-width: 768px) {
      animation: ${slideAndFadeOutMobile} 1.5s forwards;
      height: 3.5vh;
      width: 13vw;
      font-size: 2vw;
      padding: 1px;
      transform: translateX(-60%);
      right: 0;
    }
    
    @media (max-width: 375px) {
      animation: ${slideAndFadeOutMobile} 1.5s forwards;
      width: 21vw;
      font-size: 1em;
      padding: 1px;
      transform: translateX(-80%);
      right: 0;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: #d6d5d5e8;
      right: 500px;
      left: 140%;
      height: 5vw;
      width: 1vw;
      transform: skewX(-30deg);
      opacity: 0; 
      transition: 0.6s 0.2s; 
      opacity: 1; 

      @starting-style {
        left: -22vw;
      }
    }

    &:after {
      width: 1vw;
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 70%;
  height: 80%;
  right: 60%;
  bottom: 55%;
  border-radius: 50%;
  background-color: ${props => props.color};
  animation: ${CircleAnimation} 0.7s ease-in-out forwards; 
  transform-origin: center;
  z-index: 9999;
  opacity: 1; 

  @media (max-width: 768px) {
    border-radius: 15px;
  }
`;

export default Buttons;