import React, { useState } from 'react';
import { StyledProjectLIst } from './styled/StyledProjectList'
import styled from 'styled-components'

function Projectlist() {
    const [isHovered, setIsHovered] = useState(false)

    const card = [
        { id: 1, title: "The chat app",  label: "React Native",  backgroundColor: 'var(--yellowish)' },
        { id: 2, title: "The webb shop", label: "React.js", backgroundColor: 'var(--dark)' },
        { id: 3, title: "The movie app", label: "React.js / React Native",backgroundColor: 'var(--ocean)' },
        { id: 4, title: "Tic tac toe",   label: "React Native", backgroundColor: 'var(--redish)' },
    ]

    return (
        <StyledProjectLIst> 
            <ProjectContainer className='projectContainer'>
            <ListLabel>// Some projects</ListLabel>
                {card.map(card => (
                    <Card
                        key={card.id}
                        onMouseEnter={() => setIsHovered(card.id)}
                        onMouseLeave={() => setIsHovered(null)}
                        className={isHovered === card.id ? "hovered" : ""}
                        style={{ backgroundColor: isHovered === card.id ? card.backgroundColor : "" }}
                    >
                        <Title>{card.title}</Title>
                        <Label>{card.label}</Label>
                    </Card>
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

const Card = styled.div`
    width: 80vw;
    height: 8vh;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 1.5em;
    color: var(--dark);
    border: 3px solid var(--dark);
    border-radius: 15px;
    transition: 0.3s; 
    font-family: 'Fugaz One', sans-serif;

    &:hover {
        color: white;
        font-size: 1.7em;
        margin-right: -50px;
}
`
const ListLabel = styled.h4`
    font-family: 'Fugaz One', sans-serif;
    font-size: 1.2em;
    margin: 0;
    width: 80vw;
    color: #fff;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #504f4f; 
`
const Title = styled.div`
    flex: 1;    
`

const Label = styled.div`
    color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #504f4f; 
`

/* const ProjectHeader = styled.h4`
margin-left: 2vw;
color: var(--primary-color);
font-weight: 100;
transition: 0.4s; 

&:hover {
    color: white;
}
` */

export default Projectlist