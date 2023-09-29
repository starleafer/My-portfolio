import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Card({id, path, title, label, backgroundColor}) {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <Link to={`/${path}`} style={{ textDecoration: 'none' }}>
      <StyledCard
        key={id}
        onMouseEnter={() => setIsHovered(id)}
        onMouseLeave={() => setIsHovered(null)}
        className={isHovered === id ? "hovered" : ""}
        style={{ backgroundColor: isHovered === id ? backgroundColor : "" }}
      >
        <Title>{title}</Title>
        <Label>{label}</Label>
      </StyledCard>
    </Link>
  )
}


const StyledCard = styled.div`
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
const Title = styled.div`
    flex: 1;    
`

const Label = styled.div`
    color: var(--bleach);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #504f4f; 
`


export default Card