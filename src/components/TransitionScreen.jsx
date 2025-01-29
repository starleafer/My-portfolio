import React from 'react'
import styled, { keyframes } from 'styled-components';
import { motion as m } from 'framer-motion';
import { useCardContext } from '../context/CardContext';
import { useTransitionContext } from '../context/TransitionContext';

function TransitionScreen() {
  const { runTransition, transitionDirection } = useTransitionContext();
  const { card } = useCardContext();

  const currentPath = window.location.pathname.replace('/', '');
  const currentIndex = card.findIndex((item) => item.path === currentPath);
  const previousIndex = (currentIndex - 1 + card.length) % card.length;
  const nextIndex = (currentIndex + 1) % card.length;
  const nextColor = card[nextIndex].backgroundColor;
  const prevColor = card[previousIndex].backgroundColor;

  return (
    <>
      {runTransition && (
        <Transition 
        direction={transitionDirection} 
        color={transitionDirection === 'next' ? nextColor : prevColor}
      />
      )}
    </>
  )
}

export default TransitionScreen

const transitionRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const transitionLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const Transition = styled(m.div)`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: ${props => props.color};
  animation: ${props => props.direction === 'next' ? transitionRight : transitionLeft} 0.7s ease-in-out forwards;
`;