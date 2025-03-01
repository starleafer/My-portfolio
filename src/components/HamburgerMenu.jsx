import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import SideMenu from "./SideMenu";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { usePopover } from "../context/PopoverContext";

const HamburgerMenu = ({ color, backgroundColor, isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isPopoverOpen } = usePopover();
  const [showCircle, setShowCircle] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [circleColor, setCircleColor] = useState("");
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menuWidth =
        15 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      if (isOpen && e.clientX < window.innerWidth - menuWidth) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, setIsOpen]);

  const handleNavigation = (route, color, e) => {
    setClickPosition({ x: e.clientX, y: e.clientY });
    setIsClicked(true);
    setShowCircle(true);
    setCircleColor(color);
    setIsOpen(false);

    const circleAnimationTimeout = setTimeout(() => {
      setIsClicked(false);
      navigate(route);
      setShowCircle(false);
    }, 1200);

    return () => {
      clearTimeout(circleAnimationTimeout);
    };
  };

  return (
    <>
      {showCircle && <Circle color={circleColor} position={clickPosition} />}
      <HamburgerContainer location={location} isPopoverOpen={isPopoverOpen}>
        {location.pathname !== "/" && (
          <CustomButton
            label="Home"
            color={color}
            backgroundColor={backgroundColor}
            onClick={(e) => handleNavigation("/", "white", e)}
          />
        )}
        <HamburgerButton
          color={color}
          backgroundColor={backgroundColor}
          isOpen={isOpen}
          onClick={toggleMenu}
        />
        <SideMenu
          color={color}
          backgroundColor={backgroundColor}
          isOpen={isOpen}
          onNavigate={(route, color, e) => handleNavigation(route, color, e)}
        />
      </HamburgerContainer>
    </>
  );
};

export default HamburgerMenu;

const HamburgerContainer = styled.div`
  position: fixed;
  display: flex;
  width: calc(100% - 4rem);
  height: 5vh;
  justify-content: ${({ location }) =>
    location.pathname === "/" ? "flex-end" : "space-between"};
  align-items: center;
  z-index: ${({ isPopoverOpen }) => isPopoverOpen ? 0 : 100};
  padding: 2rem;
  opacity: ${({ isPopoverOpen }) => isPopoverOpen ? 0 : 1};
  visibility: ${({ isPopoverOpen }) => isPopoverOpen ? 'hidden' : 'visible'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HamburgerButton = styled.button`
  position: fixed;
  background: none;
  border: none;
  padding: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ color, isOpen, backgroundColor }) =>
    isOpen ? backgroundColor : color};
  z-index: 1000;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in-out forwards ;
  animation-delay: 0.2s;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 1px;
    background-color: ${({ isOpen, color, backgroundColor }) =>
      isOpen ? color : backgroundColor};
    transition: transform 0.3s ease-in-out;
    left: 50%;
    transform-origin: center;
  }

  &:before {
    transform: ${({ isOpen }) =>
      isOpen ? "translate(-50%, 0) rotate(45deg)" : "translate(-50%, -3px)"};
  }

  &:after {
    transform: ${({ isOpen }) =>
      isOpen ? "translate(-50%, 0) rotate(-45deg)" : "translate(-50%, 3px)"};
  }
`;

const CircleAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(100);
    opacity: 1;
  }
`;

const CircleAnimationMobile = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(300);
    opacity: 1;
  }
`;

const Circle = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  left: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  animation: ${CircleAnimation} 1.2s cubic-bezier(0.645, 0.045, 0.355, 1)
    forwards;
  z-index: 9999;
  opacity: 1;
  transform-origin: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 20px;
    height: 20px;
    animation: ${CircleAnimationMobile} 1.2s
      cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  }
`;
