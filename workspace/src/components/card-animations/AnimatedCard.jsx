/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../logos/Logo';

const AnimatedCard = ({ isVisible, delay, id }) => {

  let logo;

  switch (id) {
    case 1:
      logo = 1;
      break;
    case 2:
      logo = 2;
      break;
    case 3:
      logo = 3;
      break;
    case 4:
      logo = 4;
      break;
    case 5:
      logo = 5;
      break;
    
    default:
      logo = undefined
      break;
  }


  return (
    <AnimationContainer delay={delay} style={{ display: isVisible ? 'block' : 'none' }}>
      <Logo logo={logo} />
    </AnimationContainer>
  );
};

export default AnimatedCard;

const revealAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimationContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5vw;
  font-weight: 700;
  color: var(--dark);
  border-radius: 15px;
  opacity: 0;
  animation: ${revealAnimation} 0.3s ease-out forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  text-align: center;
`;

