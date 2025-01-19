import React from "react";
import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CustomButton = ({
  width,
  border,
  onClick,
  color,
  backgroundColor,
  invertedColors,
  shadowColor,
  label,
  previous,
  next,
  cleaning,
}) => {
  console.log("previous", previous);
  return (
    <Button
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
      shadowColor={shadowColor}
      cleaning={cleaning}
      width={width}
      border={border}
      invertedColors={invertedColors}
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
  );
};

export default CustomButton;

const fadeInShadow = (shadowColor) => keyframes`
  0% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0.3vw 0.3vw 0 ${shadowColor};
  }
`;

const fadeOutShadow = (shadowColor) => keyframes`
  0% {
    box-shadow: 0.3vw 0.3vw 0 ${shadowColor};
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || ""};
  border: 0px solid;
  color: ${(props) =>
    props.invertedColors
      ? props.backgroundColor
      : props.color || "var(--dark)"};
  background-color: transparent;
  border-radius: 10px;
  padding: 13px;
  font-size: 1vw;
  font-weight: 600;
  gap: 0.75em;
  background-size: 200% 100%;
  background-position: 100% center;
  transition: transform 0.3s, box-shadow 0.3s;

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
      border: 1px solid
        ${props.border
          ? props.invertedColors
            ? props.backgroundColor
            : props.color
          : "transparent"};
    }

    &:focus {
      transform: translateY(-0.3vw);
      animation: ${fadeInShadow(props.shadowColor || "var(--dark)")} 0.5s ease
        forwards;
    }

    &:focus:not(:hover) {
      transform: translateY(0);
      animation: ${fadeOutShadow(props.shadowColor || "var(--dark)")} 0.5s ease
        forwards;
    }
  `}

  @media (max-width: 768px) {
    width: 14vw;
    font-size: 1.3vw;
  }

  @media (max-width: 425px) {
    font-size: 2vw;
    width: 20vw;
    padding: 1.7vw;
    font-size: 2.2vw;
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
