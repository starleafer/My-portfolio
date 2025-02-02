import React from 'react';
import styled from 'styled-components';
import { useCardContext } from '../context/CardContext';
import { useNavigate } from 'react-router-dom';
import { useTransitionContext } from '../context/TransitionContext';
import CustomButton from './CustomButton';

function PageNavigationButton({ title, shadowColor }) {
  const { card } = useCardContext();
  const navigate = useNavigate();

  const { setRunTransition, triggerTransition } = useTransitionContext();


  const currentPath = window.location.pathname.replace('/My-portfolio/', '').replace('/', '');
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
      <ButtonContainer className="navigation-buttons" style={{ marginRight: '3em' }}>
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
      <ButtonContainer className="navigation-buttons">
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
  margin-top: 4vh;
  z-index: 99;


  @media (max-width: 1536px) and (min-width: 769px) {
    margin-top: 8vh;
  }


  @media (max-width: 768px) and (min-width: 320px) {
    gap: 2em;
    width: 100vw;
    margin-top: 1vh;
    justify-content: flex-start;
    padding-left: 4em;
  }
`;

const ButtonContainer = styled.div`
  width: 10em;
`;

const Title = styled.h1`
 font-size: clamp(45px, 5vw, 100px);
 font-family: 'Poiret One';

 @media (max-width: 768px) and (min-width: 320px) {
  margin-top: 1em;
 }


`;


