import React, { useRef, useState, useEffect } from 'react';
import Projectlist from '../Projectlist';
import { motion as m } from 'framer-motion'
import styled, { keyframes } from 'styled-components';
import AboutMe from './AboutMe';
import useMousePosition from '../../utils/useMousePosition';

function Mainpage({ setCursorHoverColor, setIsHoveringCards }) {
  const [hoverColor, setHoverColor] = useState('');
  const aboutMeRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('AboutMe section is in view');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);


  return (
    <>
      <MainContainer style={{fontFamily: 'Poiret One'}}>
        <Section>
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
          <Projectlist setCursorHoverColor={setCursorHoverColor} setIsHoveringCards={setIsHoveringCards} />
        </Section>
      </MainContainer>

    </>
  );
}

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
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: #fff;

  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Section = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  padding: 20px 20px 20px 5vw;
  scroll-snap-align: start;
  background-color: ${props => props.dark ? 'var(--dark)' : '#fff'};
`;

const TitlesContainer = styled(m.div)`
  display: flex;
  width: 80vw;
  align-items: end;
  flex-wrap: wrap;
  margin-top: 8vh;

  @media (max-width: 768px) {
    margin-top: 3em;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  margin: 0.5em 0.2em 0 0;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark);
`;

const TitleLetters = styled.span`
  display: inline-block; 
  font-size: clamp(3.5rem, calc(10vw + 1.7rem), 13rem);
  font-weight: 500;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark); 
  background-color: transparent; 
  transition: color 0.2s cubic-bezier(.27,-0.32,.7,1.37), background-color 0.1s , transform 0.3s; 
  
  &:hover {
    color: ${props => props.hovercolor || 'white'};
    transform: translateY(-0.7vw) translateX(-0.7vw);
    animation: ${fadeInShadow} 0.5s  forwards;
    
    .hovered {
      color: white;
    }
  }
  
  &:not(:hover) {
    animation: ${fadeOutShadow} 0.8s  forwards;
  }
  
  @media (max-width: 768px) and (min-width: 321px) {
    margin-top: .5em;
  }

`;

export default Mainpage;
