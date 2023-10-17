import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion as m } from "framer-motion";

function Buttons() {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

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

  let worksclass = "";
  let aboutclass = "";
  let lightmode = "";

  if (location.pathname === "/") {
    worksclass = "mainpage";
  } else if (location.pathname === "/about") {
    aboutclass = "about";
  }

  if(location.pathname === "/movieapp") {
    lightmode = "lightmode";
  }

  useEffect(() => {
    setFadeOut(false); 
  }, [location.pathname]);

  return (
    <ButtonContainer style={{ opacity: fadeOut ? 0 : 1 }}>
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
        {copySuccessMessage && <CopyAlert>{copySuccessMessage}</CopyAlert>}
      </Contact>
    </ButtonContainer>
  );
}

const slide = keyframes`
    0% {
      left: 0vw;
      opacity: 0;
    }
    100% {
      left: 20%;
      opacity: 1;
    }
  `;

const ButtonContainer = styled.div`
  height: 93.8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  gap: 2.5vh;
  padding: 3vh 1vw 3vh 1vw;
  position: absolute;
  left: 0;
  z-index: 1;

  :last-child {
    margin-top: auto;
  }
`;

const StyledButton = styled(m.button)`
  width: 5vw;
  height: 4vh;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 1.2em;
  font-weight: 600;
  background-color: transparent;
  transition: transform 0.5s, box-shadow 0.3s;
  z-index: 1;

  &.mainpage {
    box-shadow: 6px 8px var(--dark);
  }

  &.about {
    box-shadow: 6px 8px var(--dark);
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
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;
const CopyAlert = styled.div`
  position: absolute;
  left: 7vw;
  width: 6vw;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.3em;
  border-radius: 10px;
  background-color: var(--blueish);
  color: #fff;
  transform: translateX(100%);
  transition: transform 0.3s;

  &.clicked {
    animation: ${slide} 0.4s forwards;
  }
`;

export default Buttons;
