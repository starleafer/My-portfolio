import React, { useContext } from 'react';
import styled from 'styled-components';
import { useCardContext } from '../context/CardContext';


const PageBody = (props) => {
    const { card } = useCardContext();
    const currentPath = window.location.pathname.replace('/', '');
    const currentCard = card.find((item) => item.path === currentPath) || card[0];
    const backgroundColor = currentCard.backgroundColor;

    return (
        <Body backgroundColor={backgroundColor} {...props} />
    );
};

export default PageBody;

const Body = styled.div`
      display: flex;
      flex-direction: row;
      height: 100vh;
      background-color: ${(props) => props.backgroundColor || 'default-color'};
    
      @media (max-width: 768px) {
        flex-direction: column;
        font-size: 0.7em;
        align-items: flex-start;
      }
    `;