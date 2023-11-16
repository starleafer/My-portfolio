import React from 'react'
import styled from 'styled-components';
import { motion as m } from 'framer-motion'
import NextProject from '../NextProject';
import TransitionScreen from '../TransitionScreen';
import { useTransitionContext } from '../../context/TransitionContext';

function TicTacToe() {
  const { runTransition } = useTransitionContext();

  return (
    <>
      <Body>
        <NextProject />
      </Body>
      {
      runTransition === true
      ? <TransitionScreen />
      : ""
    }
    </>
  )
}



const Body = styled(m.div)`
display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--redish);
  height: 100vh;
  width: 100%
  /* height: 100vh; */
`
export default TicTacToe