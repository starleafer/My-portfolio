import React, { useRef, useEffect } from 'react';
import Projectlist from '../Projectlist';
import styled from 'styled-components';
import { motion as m } from 'framer-motion'

function Mainpage({path}) {
  return (
    <Container>
      <TitlesContainer
        initial={{ x: '10%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      >
        <Title>Emil Stjernlöf</Title>
      </TitlesContainer>
      <Projectlist />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-width: 90vw;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-left: auto;

  @media (max-width: 768px) {
    margin: 10vh 0 0 5vw;
    align-items: flex-start;

  }
  `

const TitlesContainer = styled(m.div)`
  display: flex;
  width: 80vw;
  align-items: end;
  flex-wrap: wrap;

  @media (max-width: 768px) {
  /* align-items: center; */
  }
`

const Title = styled.h1`
  font-size: 9em;
  font-weight: 500;
  text-align: center;
  margin: 0.5em 0.2em 0 0;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark); 

  @media (max-width: 1440px) {
    font-size: 8em;
  }

  @media (max-width: 1024px) {
    font-size: 5.7em;
  }

  @media (max-width: 768px) {
    font-size: 2.7em;
  }
`;

const SmallTitle = styled.h2`
  /* border: 1px solid black; */
  font-size: 1.4em;
  font-weight: 500;
  margin-bottom: 1em;
  color: #cacaca;
  -webkit-text-stroke-width: 1px;

  @media (max-width: 1024px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.3em;
  }

  @media (max-width: 425px) {
    margin-top: 0;
    font-size: 0.8em;

  }
`

export default Mainpage;
