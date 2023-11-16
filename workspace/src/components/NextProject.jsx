import React from 'react';
import styled from 'styled-components';
import { useCardContext } from '../context/CardContext';
import { useNavigate } from 'react-router-dom';

function NextProject() {
  const { card } = useCardContext();
  const navigate = useNavigate(); 
  
  const currentPath = window.location.pathname.replace('/', '');
  const currentCard = card.find(item => item.path === currentPath) || card[0];
  const currentIndex = card.findIndex(item => item.path === currentPath);
  const { color } = currentCard;

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % card.length; 
    const nextPath = card[nextIndex].path;
    navigate(`/${nextPath}`);
  };

  return (
    <Container>
      <NextButton
        onClick={handleClick}
        style={{ color: color, borderColor: color }}>
        Next Project <Arrow>&gt;</Arrow>
      </NextButton>
    </Container>
  );
}

export default NextProject;

const Container = styled.div`
  display: flex;
  width: 85%;
  justify-content: flex-end;
  align-items: center;
  margin: 0 0 4vh 0;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0;
    width: auto;
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
  padding: 1vw;
  font-size: 1vw;
  font-weight: 600;
  
  &:hover {
    color: #fff !important;
    border-color: #fff !important;
  }

   /* @media (max-width: 1200px) {
    font-size: 0.9em;
  }

  @media (max-width: 965px) {
    font-size: 0.9em;
  } */

  @media (max-width: 768px) {
    width: 14vw;
    font-size: 1.3vw;
  }

  @media (max-width: 375px) {
    font-size: 2vw;
    width: 19vw;
    padding: 2vw;

  } 


`;

const Arrow = styled.span`
  font-size: 1.2em;
  margin: 0.1vh 0 0 0.5em; 
`;
