import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';

function Cleaning() {

  return (
    <Body></Body>
  )
}

const Body = styled(m.div)`
  background-color: var(--yellowish);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
// const Container = styled.div`
//   width: 70vw;
//   height: 80vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 2px solid var(--dark);
//   color: var(--dark);
//   border-radius: 15px;
// `

export default Cleaning