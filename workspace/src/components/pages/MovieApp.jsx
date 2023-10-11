import React from 'react'
import styled from 'styled-components';
import { motion as m } from 'framer-motion';

function MovieApp() {
  return (
    <Body></Body>
  )
}

const Body = styled(m.div)`
background-color: var(--dark);
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
const Container = styled.div`
  width: 70vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--dark);
  color: var(--dark);
  border-radius: 15px;
`
export default MovieApp