import React, { useState } from 'react';
import { StyledProjectLIst } from './styled/StyledProjectList'
import styled from 'styled-components'
import ChatApp from './pages/ChatApp';
import Card from './Card';

function Projectlist() {

    const card = [
        { id: 1, title: "The chat app", path: 'chatapp', label: "React Native", color: 'var(--neon-green)', backgroundColor: 'var(--deep-purple)' },
        { id: 2, title: "Tic tac toe", path: 'tictactoe', label: "React Native", color:'var(--blueish)', backgroundColor: 'var(--redish)' },
        { id: 3, title: "The webb shop", path: 'webbshop', label: "React.js", color: 'bisque', backgroundColor: 'var(--dark-green)' },
        { id: 4, title: "The movie app", path: 'movieapp', label: "React.js / React Native", color:'var(--redish)', backgroundColor: 'var(--dark)' },
    ]

    return (
        <StyledProjectLIst>
            <ProjectContainer className='projectContainer'>
                <ListLabel>// Some projects</ListLabel>
                {card.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        path={card.path}
                        title={card.title}
                        label={card.label}
                        color={card.color}
                        backgroundColor={card.backgroundColor}
                    />
                ))}
            </ProjectContainer>
        </StyledProjectLIst>
    )
}

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px
`


const ListLabel = styled.h4`
    font-size: 1.3em;
    margin: 0;
    width: 80vw;
    /* color: #b1aaaa; */
    color: var(--bleach);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #504f4f; 
`

export default Projectlist