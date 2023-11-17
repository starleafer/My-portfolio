import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useCardContext } from '../context/CardContext';
import { useTransitionContext } from '../context/TransitionContext';
import { useNavigate } from 'react-router-dom';

function NextProject({ props }) {
    const { card } = useCardContext();
    const { runTransition, setRunTransition } = useTransitionContext();
    const navigate = useNavigate();

    const currentPath = window.location.pathname.replace('/', '');
    const currentCard = card.find(item => item.path === currentPath) || card[0];
    const currentIndex = card.findIndex(item => item.path === currentPath);
    const color = currentCard.color;
    const backgroundColor = currentCard.backgroundColor;

    const handleClick = () => {
        setRunTransition(true); 
        const nextIndex = (currentIndex + 1) % card.length;
        const nextPath = card[nextIndex].path;

        const transitionTimeout = setTimeout(() => {
          setRunTransition(false)
          navigate(`/${nextPath}`);
        }, 1300)
        
        return () => {
          clearTimeout(transitionTimeout);
        };
    };

    // useEffect(() => {
    //     console.log("runTransition changed:", runTransition);
    // }, [runTransition]);
    
    return (
        <Container>
            <NextButton
              onClick={handleClick}
              style={{ color: color, borderColor: color }}
              color={color} 
              backgroundColor={backgroundColor} 
              >
                Next Project <Arrow>&gt;</Arrow>
            </NextButton>
        </Container>
    );
}

export default NextProject;


const Container = styled.div`
  display: flex;
  width: 95%;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  /* border: 1px solid blue; */

  @media (max-width: 768px) {
    justify-content: flex-end;
    margin: 0;
    width: 100%;
  }
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  border: 1px solid var(--dark);
  color: var(--dark);
  background-color: transparent;
  font-family: 'Roboto Flex';
  border-radius: 10px;
  padding: 10px;
  font-size: 1vw;
  font-weight: 600;
  
  &:hover {
    background-color: ${props => props.color || 'default-hover-color'};
    color: ${props => props.backgroundColor || 'default-hover-color'} !important;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 14vw;
    font-size: 1.3vw;
  }

  @media (max-width: 425px) {
    font-size: 2vw;
    width: 20vw;
    padding: 1.7vw;
    font-size: 2.2vw;
  } 
`;

const Arrow = styled.span`
  font-size: 1.2em;
  margin: 0.1vh 0 0 0.5em; 
`;


