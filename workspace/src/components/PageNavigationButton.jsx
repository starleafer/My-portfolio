import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useCardContext } from '../context/CardContext';
import { useTransitionContext } from '../context/TransitionContext';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

function PageNavigationButton({ title, shadowColor }) {
  const { card } = useCardContext();
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

  return (
    <Container>
      <ButtonContainer style={{ marginRight: '3em' }}>
        <CustomButton
          onClick={handlePreviousClick}
          style={{ color: color }}
          color={color}
          shadowColor={shadowColor}
          backgroundColor={backgroundColor}
          label="Previous Project"
          previous
          width={'10em'}
        >
        </CustomButton>
      </ButtonContainer>
      <Title>
        {title}
      </Title>
      <ButtonContainer>
        <CustomButton
          onClick={handleNextClick}
          style={{ color: color }}
          color={color}
          shadowColor={shadowColor}
          backgroundColor={backgroundColor}
          label="Next Project"
          next
          width={'10em'}
        >
        </CustomButton>
      </ButtonContainer>

    </Container>
  );
}

export default PageNavigationButton;

const Container = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  gap: 6em;

  @media (max-width: 1536px) {
    margin-top: 1vh;
  }
`;

const ButtonContainer = styled.div`
  width: 10em;
`;

const Title = styled.h1`
 font-size: clamp(60px, 5vw, 100px);
 font-family: 'Poiret One';

`;


