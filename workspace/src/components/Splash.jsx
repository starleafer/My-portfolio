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

const Container = styled.div`
  display: flex;
  height: 100vh;
  min-width: 90vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-left: auto;
  transition: 1s;

  @starting-style {
    opacity: 0;
  }

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
  transition: 0.5s 1.2s;
  box-shadow: 1vw 1vw var(--dark);

  @starting-style {
    box-shadow: 0 0 0 var(--dark);
  }

  @media (max-width: 425px) {
    font-size: 30vw;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #f7f7f7e8;
    right: 500px;
    left: 140%;
    height: 40vw;
    width: 10vw;
    transform: skewX(-30deg);
    opacity: 0; 
    transition: 0.6s 0.5s; 
    opacity: 1; 

    @starting-style {
      left: -22vw;
    }
  }

  &:after {
    width: 3vw;
  }
`
  