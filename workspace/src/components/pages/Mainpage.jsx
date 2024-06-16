import React, { useRef, useEffect, useState } from 'react';
import Projectlist from '../Projectlist';
import { motion as m } from 'framer-motion'
import styled, { keyframes } from 'styled-components';

function Mainpage({ props}) {

  const [hoverColor, setHoverColor] = useState('');

  const colors = [
    '--dark: #1b1f2e',
    '--greenish: #497770',
    '--yellowish: #f5ca80',
    '--ocean: #00a6a6',
    '--redish: #eeb7b7',
    '--creamy: #f3b88474',
    '--blueish: #12398d',
    '--neon-green: #0ac753',
    '--light-purple: #564d8d',
    '--silver-light: #f7f7f7e8',
    '--test: #c2b8f5',
    '--more-red: #eb7d7d',
  ].map(color => color.split(': ')[1]);

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];


  const name = "Emil Stjernlöf";

  return (
    <Container>
      <TitlesContainer
        initial={{ x: '10%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      >
        <Title>
          {name.split('').map((letter, index) => 
            letter === ' ' ? 
            <span key={index}> </span> : 
            <TitleLetters 
              key={index} 
              hoverColor={hoverColor}
              onMouseEnter={() => setHoverColor(getRandomColor())}
            >
              {letter}
            </TitleLetters>
          )}
        </Title>
      </TitlesContainer>
      <Projectlist />
    </Container>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  min-width: 90vw;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 5vh 0 0 auto;


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

const TitleLetters = styled.span`
font-size: 6.5em;
  font-weight: 500;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark); 
  background-color: transparent; /* Ensure background is transparent initially */
  transition: color 0.2s ease, background-color 0.1s ease; /* Apply transition to color and background-color */

  &:hover {
    color: ${props => props.hoverColor || 'white'};
  }
`

// const SmallTitle = styled.h2`
//   /* border: 1px solid black; */
//   font-size: 1.4em;
//   font-weight: 500;
//   margin-bottom: 1em;
//   color: #cacaca;
//   -webkit-text-stroke-width: 1px;

//   @media (max-width: 1024px) {
//     font-size: 1em;
//   }

//   @media (max-width: 768px) {
//     margin-bottom: 0.3em;
//   }

//   @media (max-width: 425px) {
//     margin-top: 0;
//     font-size: 0.8em;

//   }
// `

export default Mainpage;
