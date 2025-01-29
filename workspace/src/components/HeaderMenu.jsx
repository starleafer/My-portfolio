import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { motion as m } from "framer-motion";
import { useCardContext } from "../context/CardContext";
import CustomButton from "./CustomButton";

function HeaderMenu({ about, setIsHoverButton }) {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [isContactActive, setIsContactActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [circleColor, setCircleColor] = useState("");

  const [fadeIn, setFadeIn] = useState(false);
  const { card, main } = useCardContext();
  const navigate = useNavigate();

  const currentPath = window.location.pathname.replace("/", "");
  const currentCard = card.find((item) => item.path === currentPath) || card[0];
  let color = currentCard.color;
  let backgroundColor = currentCard.backgroundColor;
  let shadow = currentCard.shadow;

  if (currentPath === "about") {
    color = main.backgroundColor;
    backgroundColor = main.color;
    shadow = main.shadow;
  } else if (currentPath === "") {
    color = main.backgroundColor;
    backgroundColor = main.color;
    shadow = main.shadow;
  }

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

  console.log("THE BG_COLOR!", backgroundColor)

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
          />
        ) : null}
        {location.pathname !== "/about" ? (
          <CustomButton
            color={color}
            backgroundColor={backgroundColor}
            invertedColors={about}
            onClick={() => handleClick("/about", "var(--dark)")}
            label="About me"
          />
        ) : null}
        <Contact className={isContactActive ? "active" : ""}>
          <CustomButton
            color={color}
            backgroundColor={backgroundColor}
            invertedColors={about}
            onClick={copyEmail}
            label="Contact"
            copyMessage={copySuccessMessage}
            showCopyAlert={true}
          />
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

const CircleAnimationMobile = keyframes`
  0% {
    transform: translate(50%, 50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(50%, 50%) scale(300);
    opacity: 1;
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
  z-index: 102;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 1s;

  @media (max-width: 768px) and (min-width: 321px) {
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: ${(props) => props.backgroundColor};
    z-index: 100;
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

  @media (max-width: 768px) and (min-width: 321px) {
    position: fixed;
    width: 20px;
    height: 20px;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    animation: ${CircleAnimationMobile} 1s ease-in-out forwards;
  }
`;

export default HeaderMenu;
