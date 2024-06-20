import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useCardContext } from '../context/CardContext';
import { useTransitionContext } from '../context/TransitionContext';
import { useNavigate } from 'react-router-dom';

function PageNavigationButton() {
  const { card } = useCardContext();
  // const { runTransition, setRunTransition } = useTransitionContext();
  const navigate = useNavigate();

  const { setRunTransition, triggerTransition } = useTransitionContext();


  const currentPath = window.location.pathname.replace('/', '');
  const currentCard = card.find(item => item.path === currentPath) || card[0];
  const currentIndex = card.findIndex(item => item.path === currentPath);
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;

  const handlePreviousClick = () => {
    setRunTransition(true);
    triggerTransition('previous');
    const previousIndex = (currentIndex - 1 + card.length) % card.length;
    const previousPath = card[previousIndex].path;

    const transitionTimeout = setTimeout(() => {
      setRunTransition(false)
      navigate(`/${previousPath}`);
    }, 800)

    return () => {
      clearTimeout(transitionTimeout);
    };
  }

  const handleNextClick = () => {
    setRunTransition(true); 
    triggerTransition('next');
    const nextIndex = (currentIndex + 1) % card.length;
    const nextPath = card[nextIndex].path;

    const transitionTimeout = setTimeout(() => {
      setRunTransition(false)
      navigate(`/${nextPath}`);
    }, 800)

    return () => {
      clearTimeout(transitionTimeout);
    };
  };

  // useEffect(() => {
  //     console.log("runTransition changed:", runTransition);
  // }, [runTransition]);

  return (
    <Container>
      <NavigationButton
        onClick={handlePreviousClick}
        style={{ color: color, borderColor: color }}
        color={color}
        backgroundColor={backgroundColor}
      >
        <Arrow left>&lt;</Arrow>Previous Project
      </NavigationButton>
      <NavigationButton
        onClick={handleNextClick}
        style={{ color: color, borderColor: color }}
        color={color}
        backgroundColor={backgroundColor}
      >
        Next Project <Arrow>&gt;</Arrow>
      </NavigationButton>

    </Container>
  );
}

export default PageNavigationButton;


const Container = styled.div`
  display: flex;
  width: 95%;
  gap: 1vw;
  justify-content: flex-end;
  align-items: center;
  margin: 0;

  @media (max-width: 768px) {
    justify-content: flex-end;
    margin: 0;
    width: 100%;
  }
`;

const NavigationButton = styled.button`
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
  background-color: transparent;
  background-image: linear-gradient(to right, ${props => props.color || 'default-hover-color'} 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: 100% center;
  transition: transform 0.5s, box-shadow 0.3s, background-position 0.5s;
  
  &:hover {
    background-position: 0% center; 
    color: ${props => props.backgroundColor || 'default-hover-color'} !important;
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
  font-size: 1.5vw;
  padding-top: 3%;
  ${props => props.left ? 'margin-right: 0.5em;' : 'margin-left: 0.5em;'}

`;


