import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { motion as m } from "framer-motion";
import { useCardContext } from "../context/CardContext";
import CustomButton from "./CustomButton";

function Buttons({ about, setIsHoverButton }) {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [isContactActive, setIsContactActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [circleColor, setCircleColor] = useState("");

  const [fadeIn, setFadeIn] = useState(false);
  const { card } = useCardContext();
  const navigate = useNavigate();

  const currentPath = window.location.pathname.replace("/", "");
  const currentCard = card.find((item) => item.path === currentPath) || card[0];
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;
  const shadow = currentCard.shadow;

  console.log(backgroundColor);

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
          <CustomButton
            color={color}
            backgroundColor={backgroundColor}
            invertedColors={about}
            onClick={() => handleClick("/", "white")}
            label="Home"
            className={`${worksclass} ${lightmode}`}
          />
        ) : null}
        {location.pathname !== "/about" ? (
          <CustomButton
            color={color}
            backgroundColor={backgroundColor}
            invertedColors={about}
            onClick={() => handleClick("/about", "var(--dark)")}
            label="About me"
            className={`${aboutclass} ${lightmode}`}
          />
        ) : null}
        <Contact className={isContactActive ? "active" : ""}>
          <CustomButton
            color={color}
            backgroundColor={backgroundColor}
            invertedColors={about}
            onClick={copyEmail}
            label="Contact"
            className={`clicked ${lightmode}`}
          />
          {copySuccessMessage && (
            <CopyAlert
              className="clicked"
              color={color}
              path={currentPath}
              backgroundColor={backgroundColor}
            >
              {copySuccessMessage}
            </CopyAlert>
          )}
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
  padding: 3vh 2vw;
  z-index: 5;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
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
  font-family: "Roboto Flex";
  border-radius: 10px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.path === "" ? "white" : props.backgroundColor};
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
      content: "";
      position: absolute;
      background-color: #f2f8ffe8;
      top: -100%;
      left: -100%;
      height: 300%;
      width: 50px;
      transform: rotate(30deg);
      animation: ${shineEffect} 0.5s ease-in-out;
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
  background-color: ${(props) => props.color};
  animation: ${CircleAnimation} 0.7s ease-in-out forwards;
  transform-origin: center;
  z-index: 9999;
  opacity: 1;

  @media (max-width: 768px) {
    border-radius: 15px;
  }
`;

export default Buttons;
