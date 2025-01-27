import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { motion as m } from "framer-motion";
import { useCardContext } from '../context/CardContext';

function Buttons({ about, setIsHoverButton }) {
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
            // onMouseEnter={() => setIsHoverButton(true)}
            // onMouseLeave={() => setIsHoverButton(false)}    
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
          // onMouseEnter={() => setIsHoverButton(true)}
          // onMouseLeave={() => setIsHoverButton(false)}   
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
          // onMouseEnter={() => setIsHoverButton(true)}
          // onMouseLeave={() => setIsHoverButton(false)}    
          >
            Contact
          </StyledButton>
          {copySuccessMessage && <CopyAlert className="clicked" color={color} backgroundColor={backgroundColor}>{copySuccessMessage}</CopyAlert>}
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
    opacity: 0;
    transform: translateX(-50%);
  }
  20% {
    opacity: 1;
    transform: translateX(0);
  }
  70% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(50%);
  }
`;

const slideAndFadeOutMobile = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  20% {
    opacity: 1;
    transform: translateX(0);
  }
  70% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(50%);
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5vh;
  padding: 2vh 1vw;
  z-index: 999;
  opacity: ${props => props.fadeIn ? 1 : 0};
  transition: opacity 1s;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    height: 5vh;
    width: 88vw;
    padding: 16px 6vw;
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
  height: 5vh;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 1.2em;
  font-weight: 600;
  color: ${props => props.about ? 'white' : props.color};
  background-color: ${props => props.about ? props.color : 'transparent'};
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
        border-color: ${props => (props.path === '') ? '#fff' : 'transparent'};
      }
    `;
  }}
`;

const Contact = styled.div`
  position: relative;
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

const shineEffect = keyframes`
  0% {
    left: -100%;
    opacity: 1;
  }
  100% {
    left: 200%;
    opacity: 1;
  }
`;

const CopyAlert = styled.div`
  position: absolute;
  left: 100%;
  margin-left: 1em;
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
  background-color: ${props => props.color};
  color: ${props => props.backgroundColor};
  transform: translateX(-50%);
  transition: transform 0.3s, color 0.3s, background-color 0.3s;
  overflow: hidden;

  &.clicked {
    animation: ${slideAndFadeOut} 2s forwards;
    
    @media (max-width: 768px) {
      animation: ${slideAndFadeOutMobile} 1.5s forwards;
      height: 3.5vh;
      width: 13vw;
      font-size: 2vw;
      padding: 1px;
      left: 100%;
      margin-left: 0.5em;
    }

    &::before {
      content: '';
      position: absolute;
      background-color: #f2f8ffe8;
      top: -100%;
      left: -100%;
      height: 300%;
      width: 50px;
      transform: rotate(30deg);
      animation: ${shineEffect} .5s ease-in-out;
      animation-delay: 0.3s;
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