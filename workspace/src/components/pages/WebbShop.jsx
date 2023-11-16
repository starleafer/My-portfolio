import React from 'react';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';
import NextProject from '../NextProject';
import { useTransitionContext } from '../../context/TransitionContext';
import TransitionScreen from '../TransitionScreen';

function WebbShop() {
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
  );
}

const Body = styled(m.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--greenish);
  height: 100vh;
  width: 100%
`
export default WebbShop