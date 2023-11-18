import React from 'react'
import styled, { keyframes } from 'styled-components';
import { motion as m } from 'framer-motion';
import { useCardContext } from '../context/CardContext';

function TransitionScreen() {
    const { card } = useCardContext();

    const currentPath = window.location.pathname.replace('/', '');
    const currentIndex = card.findIndex((item) => item.path === currentPath);
    const nextIndex = (currentIndex + 1) % card.length;
    const nextColor = card[nextIndex].backgroundColor;


    console.log(
        "Current path: " + currentPath,
        "Current index: " + currentIndex,
        "Next index: " + nextIndex,
        "Next color is: " + nextColor
    )

    return (
        <Transition style={{ backgroundColor: nextColor }}></Transition>
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

const Transition = styled(m.div)`
    position: absolute;
    height: 100vh;
    width: 100%;
    animation: ${transitionRight} 1s ease-in-out forwards; 
    z-index: 1000; 
`