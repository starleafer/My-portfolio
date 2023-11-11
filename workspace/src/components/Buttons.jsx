import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion as m } from "framer-motion";
import { useButtonContext } from '../context/ButtonContext';

function Buttons() {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [isContactActive, setIsContactActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const { buttonFade } = useButtonContext();

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
      className={fadeOut ? 'fade-out' : ''}
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
    >
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <StyledButton className={`${worksclass} ${lightmode}`}>
          Works
        </StyledButton>
      </Link>
      <Link to={`/about`} style={{ textDecoration: "none" }}>
        <StyledButton className={`${aboutclass} ${lightmode}`}>
          About
        </StyledButton>
      </Link>
      <Contact className={isContactActive ? 'active' : ''}>
        <StyledButton onClick={() => { copyEmail(); setIsContactActive(true); }} className={`clicked ${lightmode}`}>
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
    right: 10%; 
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

const ButtonContainer = styled(m.div)`
  height: 93.8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  gap: 2.5vh;
  padding: 3vh 1vw 3vh 1vw;
  position: fixed;
  left: 0;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: row; 
    align-items: flex-start;
    height: 5vh;
    width: 87vw;
    padding: 16px 6vw;
  }

  :last-child {
    margin-top: auto;

    @media (max-width: 768px) {
      margin: 0;
      margin-left: auto;
  }
  }
  
  &.fade-in {
    animation: ${fadein} 0.3s forwards;
  }

  &.fade-out {
    animation: ${fadeout} 0.3s forwards;
  }
`;

const StyledButton = styled(m.button)`
  min-width: 5vw;
  height: 4vh;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 1.2em;
  font-weight: 600;
  background-color: transparent;
  transition: transform 0.5s, box-shadow 0.3s;
  z-index: 1;

  @media (max-width: 1200px) {
    font-size: 0.9em;
  }

  @media (max-width: 965px) {
    font-size: 0.9em;
  }

  &.lightmode {
    color: #fff;
    border-color: #fff;
  }

  &:hover {
    background-color: var(--dark);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    height: 3.5vh;

    &:hover {
      background-color: transparent;
      color: inherit;
    }
  }

  &.mainpage,
  &.about {
  box-shadow: 6px 8px var(--dark);

  @media (max-width: 768px) {
    box-shadow: none;
    font-size: 0.9em;
    height: 3.5vh;
    background-color: var(--dark);
    color: #fff;
  }
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

  @media (max-width: 375px) {    
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
  border-radius: 10px;
  background-color: #54a051;
  color: #fff;
  transform: translateX(100%);
  transition: transform 0.3s; 

  &.clicked {
    animation: ${slideAndFadeOut} 1.5s forwards;
    
    @media (max-width: 768px) {
      
      animation: ${slideAndFadeOutMobile} 1.5s forwards;
      width: 60px;
      height: 3.3vh;
      font-size: 0.8em;
      padding: 1px;
      transform: translateX(-60%);
      right: 0;
    }
    
    @media (max-width: 375px) {
      
      animation: ${slideAndFadeOutMobile} 1.5s forwards;
      width: 60px;
      height: 3.3vh;
      font-size: 0.8em;
      padding: 1px;
      transform: translateX(-80%);
      right: 0;
    }
  }
`;

export default Buttons;
