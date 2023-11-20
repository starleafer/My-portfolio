import React, { useState } from 'react';
import styled from 'styled-components'
import Card from './Card';
import { CardProvider, useCardContext } from '../context/CardContext';

function Projectlist() {
    const { card } = useCardContext();

    if (!card) {
        return console.log('Context is undefined');
    }

    return (
        <CardProvider>
            <StyledProjectList>
                <ListLabel>/ Pick a project</ListLabel>
                <ProjectContainer>
                    {card.map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            path={item.path}
                            title={item.title}
                            label={item.label}
                            color={item.color}
                            backgroundColor={item.backgroundColor}
                        />
                    ))}
                </ProjectContainer>
            </StyledProjectList>
        </CardProvider>
    )
}

const StyledProjectList = styled.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
    width: 90vw;
  }
`

const ProjectContainer = styled.div`
    height:50vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2vw;

    @media (max-width: 1024px) {
        height: 45vh;
;
  }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
  }
`

const ListLabel = styled.h4`
    font-size: 1.5em;
    font-weight: 900;
    margin-bottom: 10px;
    align-self: flex-start; 
    color: var(--dark);

    @media (max-width: 1024px) {
        font-size: 1.2em;
  }
    `

export default Projectlist