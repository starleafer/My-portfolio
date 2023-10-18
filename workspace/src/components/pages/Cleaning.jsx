import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';

function Cleaning() {

  return (
    <Body>
      <InfoContainer>
        <Info></Info>
        <Info></Info>
        <Info></Info>
      </InfoContainer>
      <ImageContainer>
      </ImageContainer>
    </Body>
  )
}

const Body = styled(m.div)`
  background-color: var(--yellowish);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
`
const InfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px black solid;
  height: 80vh;
  width: 35vw;
`
const Info = styled.section`
  border: 1px solid white;
  height: 5vh;
  width: 80%;
`

const ImageContainer = styled.div`
  display: flex;
  border: 1px black solid;
  height: 80vh;
  width: 35vw;
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