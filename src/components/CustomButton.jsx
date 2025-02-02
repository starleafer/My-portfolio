import React from "react";
import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const CustomButton = ({
  width,
  border,
  onClick,
  color,
  padding,
  backgroundColor,
  invertedColors,
  small,
  label,
  previous,
  next,
  cleaning,
  showCopyAlert,
  copyMessage,
  showViewSwitch,
}) => {
  return (
    <ButtonContainer>
      <Button
        onClick={onClick}
        color={color}
        backgroundColor={backgroundColor}
        padding={padding}
        cleaning={cleaning}
        width={width}
        border={border}
        invertedColors={invertedColors}
        small={small}
        showViewSwitch={showViewSwitch}
      >
        {previous || next ? (
          <>
            {previous && (
              <>
                <StyledIcon
                  color={color}
                  backgroundColor={backgroundColor}
                  invertedColors={invertedColors}
                  icon={faArrowLeft}
                />{" "}
                {label}
              </>
            )}
            {next && (
              <>
                {label}{" "}
                <StyledIcon
                  color={color}
                  backgroundColor={backgroundColor}
                  invertedColors={invertedColors}
                  icon={faArrowRight}
                />
              </>
            )}
          </>
        ) : (
          label
        )}
      </Button>
      {showCopyAlert && copyMessage && (
        <CopyAlert
          color={color}
          backgroundColor={backgroundColor}
          className="clicked"
        >
          {copyMessage}
        </CopyAlert>
      )}
    </ButtonContainer>
  );
};

CustomButton.propTypes = {
  width: PropTypes.string,
  border: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  invertedColors: PropTypes.bool,
  shadowColor: PropTypes.string,
  label: PropTypes.node,
  previous: PropTypes.bool,
  next: PropTypes.bool,
  cleaning: PropTypes.bool,
  showCopyAlert: PropTypes.bool,
  copyMessage: PropTypes.string,
};

const ButtonContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

const fadeInShadow = () => keyframes`
  0% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0.3vw 0.3vw 0 ;
  }
`;

const fadeOutShadow = () => keyframes`
  0% {
    box-shadow: 0.3vw 0.3vw 0 ;
  }
  100% {
    box-shadow: 0 0 0 transparent;
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

const StyledIcon = styled(FontAwesomeIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.5em;
  height: 0.5em;
  font-size: 1.5em;
  color: ${(props) =>
    props.invertedColors
      ? props.backgroundColor
      : props.color || "var(--dark)"};
`;

const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: ${(props) => props.width || ""};
  border: 1px solid transparent;
  color: ${(props) =>
    props.invertedColors
      ? props.backgroundColor
      : props.color || "var(--dark)"};
  background-color: ${(props) =>
    props.invertedColors
      ? props.color
      : props.backgroundColor || "transparent"};
  border-radius: 10px;
  padding: ${(props) => props.padding || "10px"};
  font-size: clamp(15px, 2vw, 20px);
  font-family: "Poiret One";
  font-weight: 600;
  gap: 0.4em;
  background-size: 200% 100%;
  background-position: 100% center;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  ${(props) => css`
    &:hover {
      transform: translateY(-0.3vw);
      animation: ${fadeInShadow(props.shadowColor || "var(--dark)")} 0.5s ease
        forwards;
      border: 1px solid
        ${props.invertedColors
          ? props.backgroundColor
          : props.color || "var(--dark)"};
    }

    &:not(:hover) {
      animation: ${fadeOutShadow(props.shadowColor || "var(--dark)")} 0.8s;
      border-color: ${(props) =>
        props.border
          ? `1px solid ${props.color}`
          : props.invertedColors && props.border
          ? props.backgroundColor
          : "transparent"};
      background-color: ${(props) =>
        props.showViewSwitch ? props.color : "transparent"};
    }

    &:focus {
      transform: translateY(-0.3vw);
      animation: ${fadeInShadow(props.shadowColor || "var(--dark)")} 0.5s ease
        forwards;
      border: 1px solid
        ${props.invertedColors
          ? props.backgroundColor
          : props.color || "var(--dark)"};
    }

    &:focus:not(:hover) {
      transform: translateY(0);
      animation: ${fadeOutShadow(props.shadowColor || "var(--dark)")} 0.5s ease
        forwards;
      border-color: ${props.border
        ? props.color
        : props.invertedColors && props.border
        ? props.backgroundColor
        : "transparent"};
    }

    &:active {
      color: ${(props) =>
        props.invertedColors
          ? props.color
          : props.backgroundColor || "transparent"};
      background-color: ${(props) =>
        props.invertedColors
          ? props.backgroundColor
          : props.color || "var(--dark)"};
      transition: color 0.1s, background-color 0.1s;

      ${StyledIcon} {
        color: ${props.invertedColors
          ? props.color
          : props.backgroundColor || "var(--dark)"};
      }
    }
  `}

  @media (max-width: 1536px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: ${(props) =>
      props.small ? "3rem" : props.width ? props.width : "auto"};
    height: ${(props) =>
      props.small ? "3rem" : props.height ? props.height : "auto"};
    padding: 1.3vw;
    text-wrap: nowrap;
    border: 1px solid
      ${(props) =>
        props.invertedColors
          ? props.backgroundColor
          : props.color || "var(--dark)"};
    transform: none;
    box-shadow: none;
    animation: none;

    &:hover {
      transform: none;
      animation: none;
      border: 1px solid
        ${(props) =>
          props.invertedColors
            ? props.backgroundColor
            : props.color || "var(--dark)"};
    }

    &:focus {
      transform: none;
      animation: none;
      border: 1px solid
        ${(props) =>
          props.invertedColors
            ? props.backgroundColor
            : props.color || "var(--dark)"};
    }

    &:focus:not(:hover) {
      transform: none;
      animation: none;
      border: 1px solid
        ${(props) =>
          props.invertedColors
            ? props.backgroundColor
            : props.color || "var(--dark)"};
    }

    &:not(:hover) {
      animation: none;
      padding: 0.7em;
      border: 1px solid
        ${(props) =>
          props.invertedColors
            ? props.backgroundColor
            : props.color || "var(--dark)"};
    }

    &:active {
      color: ${(props) =>
        props.invertedColors
          ? props.color
          : props.backgroundColor || "transparent"};
      background-color: ${(props) =>
        props.invertedColors
          ? props.backgroundColor
          : props.color || "var(--dark)"};
      transition: color 0.1s, background-color 0.1s;

      ${StyledIcon} {
        color: ${(props) =>
          props.invertedColors
            ? props.color
            : props.backgroundColor || "var(--dark)"};
      }
    }
  }
`;
const CopyAlert = styled.div`
  position: absolute;
  left: 6vw;
  margin-left: 1em;
  width: 110px;
  height: 40px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1em;
  font-family: "Lato", sans-serif;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.backgroundColor};
  transform: translateX(-50%);
  transition: transform 0.3s, color 0.3s, background-color 0.3s;
  overflow: hidden;

  &.clicked {
    animation: ${slideAndFadeOut} 2s forwards;

    @media (max-width: 768px) and (min-width: 320px) {
      animation: ${slideAndFadeOutMobile} 1.5s forwards;
      width: 80px;
      height: 25px;
      padding: 4px;
      left: 100%;
      margin-left: 1em;
      font-size: 0.8rem;
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

export default CustomButton;
