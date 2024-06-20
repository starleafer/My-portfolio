import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion as m } from "framer-motion";
import { useButtonContext } from '../context/ButtonContext';
import { useCardContext } from '../context/CardContext';

function Buttons({ props }) {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [isContactActive, setIsContactActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const { buttonFade } = useButtonContext();
  const { card } = useCardContext();

  const currentPath = window.location.pathname.replace('/', '');
  const currentCard = card.find(item => item.path === currentPath) || card[0];
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;

  const location = useLocation();
  const email = "emil.stjernlof@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`Email copied!`);
    setIsContactActive(true);
    setTimeout(() => {
      setIsContactActive(false);
    }, 200);
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

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

  useEffect(() => {
    setFadeOut(false);
  }, [location.pathname]);

  useEffect(() => {
    if (buttonFade) {
      setFadeOut(true);
    }
  }, [buttonFade]);

  return (
    <ButtonContainer
      className={`fade-${fadeOut ? 'out' : 'in'}`}
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      path={currentPath}
      backgroundColor={backgroundColor}
    >
      {
        location.pathname !== "/" ?
          <>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <StyledButton
                path={currentPath}
                style={{ borderColor: color }}
                color={color}
                backgroundColor={backgroundColor}
                className={`${worksclass} ${lightmode}`}
              >
                Home
              </StyledButton>
            </Link>
            <Link to={`/about`} style={{ textDecoration: "none" }}>
              <StyledButton
                path={currentPath}
                style={{ borderColor: color }}
                color={color}
                backgroundColor={backgroundColor}
                className={`${aboutclass} ${lightmode}`}
              >
                About
              </StyledButton>
            </Link>
          </>
          : null}
      <Contact className={isContactActive ? 'active' : ''}>
        <StyledButton
          path={currentPath}
          style={{ borderColor: color }}
          color={color}
          backgroundColor={backgroundColor}
          onClick={() => { copyEmail(); setIsContactActive(true); }}
          className={`clicked ${lightmode}`}
        >
          Contact
        </StyledButton>
        {copySuccessMessage && <CopyAlert className="clicked">{copySuccessMessage}</CopyAlert>}
      </Contact>
    </ButtonContainer>
  );
}

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

const fadein = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const fadeout = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

const fadeOutShadow = keyframes`
  0% {
    box-shadow: 0vw 0vw var(--dark);
  }
  100% {
    box-shadow: 0.5vw 0.5vw var(--dark);
  }
`;

const ButtonContainer = styled(m.div)`
  height: 93.8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.path === '' || props.path === 'about') ? '#fff' : props.backgroundColor};
  gap: 2.5vh;
  padding: 3vh 1vw;
  position: fixed;
  left: 0;
  z-index: 1;

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
  
  &.fade-in {
    animation: ${fadein} 0.1s forwards;
  }

  &.fade-out {
    animation: ${fadeout} 0.3s forwards;
  }
`;

const StyledButton = styled(m.button)`
  min-width: 5vw;
  height: 4vh;
  border-radius: 8px;
  border: 1px solid black;
  font-size: 1em;
  font-weight: 600;
  color: ${props => props.color};
  background-color: transparent;
  background-image: linear-gradient(to right, ${props => props.color || 'default-hover-color'} 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: 100% center;
  transition: transform 0.5s, box-shadow 0.3s, background-position 0.5s;
  z-index: 1;

  @media (max-width: 1200px) {
    font-size: 0.9em;
  }

  @media (max-width: 965px) {
    font-size: 0.9em;
  }

  &.lightmode {
    color: var(--redish);
    border-color: var(--redish);
  }

  &:hover {
    color: ${props => (props.path === '' || props.path === 'about') ? '#fff' : props.backgroundColor};
    cursor: pointer;
    background-position: 0% center; 
  }



  @media (max-width: 768px) {
    font-size: 1.1em;
    height: 3.5vh;

  }

  @media (max-width: 375px) {
    font-size: 1.2em;
  }

  &.mainpage,
  &.about {
  transform: translateY(-0.3vw) translateX(-0.3vw);
  animation: ${fadeOutShadow} 0.8s ease forwards;
  }
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
  background-color: #54a051;
  color: #fff;
  transform: translateX(100%);
  transition: transform 0.3s; 

  &.clicked {
    animation: ${slideAndFadeOut} 1.5s forwards;
    
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
  }
`;

export default Buttons;
