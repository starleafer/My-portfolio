import React from 'react';
import styled from 'styled-components';
import { useCardContext } from '../context/CardContext';


const CustomScrollbar = ({ props, children, scrollbarColor }) => {
  const { card } = useCardContext();
  const currentPath = window.location.pathname.replace('/', '');
  const currentCard = card.find(item => item.path === currentPath) || card[0];
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;

  console.log(color)

  return (
    <CustomScrollbarContainer thumbColor={color} trackColor={backgroundColor}>
      {children}
    </CustomScrollbarContainer>
  );
};

export default CustomScrollbar;

const CustomScrollbarContainer = styled.div`
    overflow-y: auto;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 12px;
      background-color: ${(props) => props.trackColor || 'gray'};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.thumbColor || 'red'};
      border-radius: 6px;
    }
  `;