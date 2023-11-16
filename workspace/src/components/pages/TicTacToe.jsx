import React from 'react'
import styled from 'styled-components';
import { motion as m } from 'framer-motion'
import NextProject from '../NextProject';

function TicTacToe() {
  return (

    <Body>
      <NextProject />
    </Body>
  )
}



const Body = styled(m.div)`
  background-color: var(--redish);
  height: 100vh;
  width: 100%
  /* height: 100vh; */
`
export default TicTacToe