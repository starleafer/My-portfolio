import React from 'react'
import styled, { keyframes } from 'styled-components';
import { motion as m } from 'framer-motion';

const Splash = () => {
  return (
    <Container>
      <ES>
        ES
      </ES>
    </Container>
  )
}

export default Splash

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeInShadow = keyframes`
0% {
  box-shadow: 0 0 0 var(--dark);
}
100% {
  box-shadow: 1vw 1vw var(--dark);
}
`;

const slide = keyframes`
    0% {
      left: -22vw;
    }
    100% {
      left: 140%;
    }
  `;

const Container = styled.div`
  display: flex;
  height: 100vh;
  min-width: 90vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-left: auto;
  animation: ${fadeIn} 0.5s ease forwards;

  @media (max-width: 768px) {
    margin: 10vh 0 0 5vw;
    align-items: flex-start;

  }
  `

const ES = styled.div`
  display: flex;
  width: 16vw;
  height: 48vh;
  position: relative;
  overflow: hidden; 
  justify-content: center;
  align-items: center;
  font-size: 20vw;
  font-weight: 500;
  text-align: center;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark); 
  padding: 0 1vw;
  z-index: 999;
  border: 3px solid var(--dark);
  border-radius: 15px;
  transform: translateY(-1.5vw);
  transition: transform 0.3s;
  animation: ${fadeInShadow} 0.5s ease forwards 1s;

  @media (max-width: 425px) {
    font-size: 30vw;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #f7f7f7e8;
    right: 500px;
    height: 40vw;
    width: 10vw;
    transform: skewX(-30deg);
    opacity: 0; 
    animation: ${slide} 0.6s forwards 0.5s; 
    opacity: 1; 
  }

  &:after {
    width: 3vw;
  }

`
  ;