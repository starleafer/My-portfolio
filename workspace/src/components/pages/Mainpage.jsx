import React from 'react';
import Projectlist from '../Projectlist';
import styled from 'styled-components';
import { motion as m } from 'framer-motion'

function Mainpage() {
  return (
      <>
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
      </>

  );
}

const Container = styled(m.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const TitlesContainer = styled.div`
  display: flex;
  height: 30vh;
  width: 80vw;
  margin-top: 5vh;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 8vw;
  font-weight: 500;
  text-align: center;
  margin: 0.5em 0.2em 0.5em 0;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark); 
`;

const SmallTitle = styled.h2`
  font-size: 1.45vw;
  font-weight: 500;
  margin: 3em 0 0 0;
  color: #cacaca;
  -webkit-text-stroke-width: 1px;
`

export default Mainpage;
