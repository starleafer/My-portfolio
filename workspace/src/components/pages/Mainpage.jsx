import React from 'react';
import Projectlist from '../Projectlist';
import styled from 'styled-components';
import { motion as m } from 'framer-motion'

function Mainpage({path}) {
  return (
        <Container
          initial={{ x: '10%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <TitlesContainer>
            <Title>Emil Stjernlöf</Title>
            <SmallTitle>/ Front end developer in development</SmallTitle>
          </TitlesContainer>
          <Projectlist />
        </Container>

  );
}

const Container = styled(m.div)`
  display: flex;
  min-width: 90vw;
  /* max-width: 90vw; */
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-left: auto;
  /* border: 2px solid green; */

  @media (max-width: 768px) {
    margin: 10vh 0 0 5vw;
    align-items: flex-start;

  }
  `

const TitlesContainer = styled.div`
  display: flex;
  width: 80vw;
  align-items: end;
`

const Title = styled.h1`
  font-size: 8vw;
  font-weight: 500;
  text-align: center;
  margin: 0.5em 0.2em 0 0;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark); 

  @media (max-width: 768px) {
    font-size: 2.7em;

  }
`;

const SmallTitle = styled.h2`
  /* border: 1px solid black; */
  font-size: 1.45vw;
  font-weight: 500;
  margin: 3em 0 1em 0;
  color: #cacaca;
  -webkit-text-stroke-width: 1px;
`

export default Mainpage;
