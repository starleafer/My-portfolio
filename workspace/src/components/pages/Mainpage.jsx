import React, { useRef, useEffect, useState } from 'react';
import Projectlist from '../Projectlist';
import { motion as m } from 'framer-motion'
import styled, { keyframes } from 'styled-components';
import ProfilePic from "../../assets/ProfilePic.jpg";
import AboutMe from '../pages/AboutMe';

function Mainpage({ setCursorHoverColor, setIsHovering  }) {

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
    <MainContainer>
      <SectionOne>
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
                  hovercolor={hoverColor}
                  onMouseEnter={() => setHoverColor(getRandomColor())}
                >
                  {letter}
                </TitleLetters>
            )}
          </Title>
        </TitlesContainer>
        <Projectlist setCursorHoverColor={setCursorHoverColor} setIsHovering={setIsHovering} />
      </SectionOne>
      <SectionTwo>
        <AboutMe />
      </SectionTwo>
    </MainContainer>
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

const fadeInShadow = keyframes`
0% {
  text-shadow: 0 0 0 var(--dark);
}
100% {
  text-shadow: 0.7vw 0.7vw var(--dark);
}
`;

const fadeOutShadow = keyframes`
  0% {
    text-shadow: 0.7vw 0.7vw var(--dark);
  }
  100% {
    text-shadow: 0 0 0 var(--dark);
  }
`;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh; 
  padding-left: 5vw;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  background-color: #fff;
`;

const SectionOne = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh; 
  align-items: center;
  flex-direction: column;
  position: relative;
  scroll-snap-align: start;
  box-sizing: border-box; 
  padding: 20px;
`;

const SectionTwo = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh; 
  align-items: center;
  flex-direction: column;
  position: relative;
  scroll-snap-align: start;
  box-sizing: border-box; 
  padding: 20px;
`;

const TitlesContainer = styled(m.div)`
  display: flex;
  width: 80vw;
  align-items: end;
  flex-wrap: wrap;
  margin-top: 5vh;

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
  display: inline-block; 

font-size: 6.5em;
  font-weight: 500;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark); 
  background-color: transparent; 
  transition: color 0.2s ease, background-color 0.1s ease, transform 0.3s ease; 

  &:hover {
    color: ${props => props.hovercolor || 'white'};
    transform: translateY(-0.7vw) translateX(-0.7vw);
    animation: ${fadeInShadow} 0.5s ease forwards;
    
    .hovered {
      color: white;
    }
  }

  &:not(:hover) {
    animation: ${fadeOutShadow} 0.8s ease forwards;
  }
`

export default Mainpage;
