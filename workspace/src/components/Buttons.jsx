import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion as m } from "framer-motion";
import { useButtonContext } from '../context/ButtonContext';

function Buttons() {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
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
      <Contact>
        <StyledButton onClick={copyEmail} className={`clicked ${lightmode}`}>
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

// const slideAndFadeOutMobile = keyframes`
//   0% {
//     right: 80vw;
//     opacity: 0;
//   }
//   20% {
//     right: 85vw;
//     opacity: 1;
//   }
//   70% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//   }
// `;

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
      margin: 0 7px 0 0;
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
  /* width: 5vw; */
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

  @media (max-width: 768px) {
    font-size: 0.9em;
    height: 3.5vh;

  }

  &.mainpage,
  &.about {
  box-shadow: 6px 8px var(--dark);

  @media (max-width: 768px) {
    box-shadow: none;
    background-color: var(--dark);
    color: #fff;
  }
}

  &.lightmode {
    color: #fff;
    border-color: #fff;
  }

  &:hover {
    background-color: var(--dark);
    color: #fff;
  }
`;

const Contact = styled.div`
  display: flex;
  min-width: 5vw;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;

  
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

  @media (max-width: 768px) {
   width: 60px;
   height: 20px;
   font-size: 0.8em;
   padding: 1px;
  }
 

  &.clicked {
    animation: ${slideAndFadeOut} 1.5s forwards;

    @media (max-width: 768px) {
      animation: ${slideAndFadeOut} 1.5s forwards;

      transform: translateX(-100%); // Updated line for mobile

    }
  }
`;

export default Buttons;
