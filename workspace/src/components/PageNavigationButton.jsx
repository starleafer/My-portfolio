import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useCardContext } from '../context/CardContext';
import { useTransitionContext } from '../context/TransitionContext';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

function PageNavigationButton({ title }) {
  const { card } = useCardContext();
  const navigate = useNavigate();

  const { setRunTransition, triggerTransition } = useTransitionContext();


  const currentPath = window.location.pathname.replace('/', '');
  const currentCard = card.find(item => item.path === currentPath) || card[0];
  const currentIndex = card.findIndex(item => item.path === currentPath);
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;
  const shadow = currentCard.shadow;

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
          style={{ color: color}}
          color={color}
          shadow={shadow}
          backgroundColor={backgroundColor}
          label="Previous Project"
          width={'10em'}
          >
        </CustomButton>
      </ButtonContainer>
        {title}
      <ButtonContainer>
        <CustomButton
          onClick={handleNextClick}
          style={{ color: color }}
          color={color}
          shadow={shadow}
          backgroundColor={backgroundColor}
          label="Next Project"
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
  margin-top: 3em;

  @media (max-width: 768px) {
    justify-content: flex-end;
    margin: 0;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  width: 10em;
`;



