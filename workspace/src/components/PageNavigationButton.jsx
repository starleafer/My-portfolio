import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useCardContext } from '../context/CardContext';
import { useTransitionContext } from '../context/TransitionContext';
import { useNavigate } from 'react-router-dom';

function PageNavigationButton({title}) {
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
      <NavigationButton
        onClick={handlePreviousClick}
        style={{ color: color }}
        color={color}
        shadow={shadow}
        backgroundColor={backgroundColor}
      >
        <Arrow left>&lt;</Arrow>Previous Project
      </NavigationButton>
      {title}
      <NavigationButton
        onClick={handleNextClick}
        style={{ color: color}}
        color={color}
        shadow={shadow}

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
  width: 40vw;
  gap: 2vw;
  justify-content: center;
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
  width: 10em;
  border: 0px solid transparent;
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
  transition: transform 1s;

  ${props => {
    const fadeInShadow = keyframes`
      0% {
        box-shadow: 0 0 0 transparent;
      }
      100% {
        box-shadow: 0.3vw 0.3vw 0 ${props.shadow || 'var(--dark)'};
      }
    `;

    const fadeOutShadow = keyframes`
      0% {
        box-shadow: 0.5vw 0.5vw 0 ${props.shadow || 'var(--dark)'};
      }
      100% {
        box-shadow: 0 0 0 ;
      }
    `;

    return css`
      &:hover {
        transform: translateY(-0.3vw);
        transition: transform 0.3s;
        animation: ${fadeInShadow} 0.5s ease forwards;
        border: 1px solid ${props.color || 'var(--dark)'};
      }

      &:not(:hover) {
        animation: ${fadeOutShadow} 0.8s;
        border-color: transparent;
      }

      &:focus {
        outline: none;
        transform: translateY(-1vw);
        transition: transform 0.3s;
        animation: ${fadeInShadow} 0.5s ease forwards;
      }
    `;
  }}

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


