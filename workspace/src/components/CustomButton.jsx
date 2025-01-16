import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const CustomButton = ({ width, border, onClick, color, backgroundColor, shadowColor, label, cleaning }) => {
  console.log(cleaning)
  return (
    <Button
      onClick={onClick}
      color={color}
      shadowColor={shadowColor}
      cleaning={cleaning}
      width={width}
      style={{ color: cleaning ? backgroundColor : color }}
      borders
    >
      {label}
    </Button>
  );
};

export default CustomButton;


const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || ''};
  border: 0px solid;
  color: var(--dark);
  background-color: transparent;
  font-family: 'Roboto Flex';
  border-radius: 10px;
  padding: 13px;
  font-size: 1vw;
  font-weight: 600;
  background-color: transparent;
  background-image: linear-gradient(to right, ${(props) => props.color || 'default-hover-color'} 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: 100% center;
  transition: transform 0.3s, box-shadow 0.3s;

  ${(props) => {
    const fadeInShadow = keyframes`
      0% {
        box-shadow: 0 0 0 transparent;
      }
      100% {
        box-shadow: 0.3vw 0.3vw 0 ${props.shadowColor || 'var(--dark)'};
      }
    `;

    const fadeOutShadow = keyframes`
      0% {
        box-shadow: 0.5vw 0.5vw 0 ${props.shadowColor || 'var(--dark)'};
      }
      100% {
        box-shadow: 0 0 0;
      }
    `;

    return css`
      &:hover {
        transform: translateY(-0.3vw);
        animation: ${fadeInShadow} 0.5s ease forwards;
        border: 1px solid ${props.cleaning ? props.backgroundColor : props.color || 'var(--dark)'};
      }

      &:not(:hover) {
        animation: ${fadeOutShadow} 0.8s;
        border-color: transparent;
      }

      &:focus {
        transform: translateY(-0.3vw);
        animation: ${fadeInShadow} 0.5s ease forwards;
      }

      &:focus:not(:hover) {
        transform: translateY(0);
        animation: ${fadeOutShadow} 0.5s ease forwards;
      }
    `;
  }}

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
