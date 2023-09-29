import React, { useState } from 'react';
import { StyledProjectLIst } from './styled/StyledProjectList'
import styled from 'styled-components'
import ChatApp from './pages/ChatApp';
import Card from './Card';

function Projectlist() {

    const card = [
        { id: 1, title: "The chat app", path: 'chatapp', label: "React Native", backgroundColor: 'var(--yellowish)' },
        { id: 2, title: "The webb shop", path: 'webbshop', label: "React.js", backgroundColor: 'var(--dark)' },
        { id: 3, title: "The movie app", path: 'movieapp', label: "React.js / React Native", backgroundColor: 'var(--ocean)' },
        { id: 4, title: "Tic tac toe", path: 'tictactoe', label: "React Native", backgroundColor: 'var(--redish)' },
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
    font-family: 'Fugaz One', sans-serif;
    font-size: 1.2em;
    margin: 0;
    width: 80vw;
    color: var(--dark);
    /* -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #504f4f;  */
`

export default Projectlist