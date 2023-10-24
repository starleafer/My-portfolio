import React, { useState } from 'react';
import { StyledProjectLIst } from './styled/StyledProjectList'
import styled from 'styled-components'
import ChatApp from './pages/ChatApp';
import Card from './Card';
import Sidebar from './Sidebar';

function Projectlist() {

    const card = [
        { id: 1, title: "Cleaning company", path: 'cleaning', label: "React.js", color: 'var(--dark)', backgroundColor: 'var(--yellowish)' },
        { id: 2, title: "Tic tac toe", path: 'tictactoe', label: "React Native", color: 'var(--blueish)', backgroundColor: 'var(--redish)' },
        { id: 3, title: "The webb shop", path: 'webbshop', label: "React.js", color: 'bisque', backgroundColor: 'var(--greenish)' },
        { id: 4, title: "The chat app", path: 'chatapp', label: "React Native", color: 'var(--neon-green)', backgroundColor: 'var(--light-purple)' },
        { id: 5, title: "The movie app", path: 'movieapp', label: "React.js / React Native", color: 'var(--redish)', backgroundColor: 'var(--dark)' },
    ]

    return (
        <StyledProjectList>
            <ListLabel>// Some projects</ListLabel>
            <ProjectContainer>
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
        </StyledProjectList>
    )
}

const StyledProjectList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ProjectContainer = styled.div`
    height:57.7vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
`

const ListLabel = styled.h4`
    font-size: 1.3em;
    margin-bottom: 55px;
    align-self: flex-start; 
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #504f4f; 
`

export default Projectlist