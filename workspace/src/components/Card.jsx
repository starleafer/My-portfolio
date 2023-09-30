import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Card({ id, path, title, label, color, backgroundColor }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const handleMouseEnter = () => {
      cursor.style.borderColor = "var(--bleach)";
    };

    const handleMouseLeave = () => {
      cursor.style.borderColor = "var(--dark)";
    };

    if (isHovered) {
      cursor.style.borderColor = "var(--bleach)";
    }

    return () => {
      cursor.style.borderColor = "var(--dark)";
    };
  }, [isHovered]);

  return (
    <Link to={`/${path}`} style={{ textDecoration: 'none' }}>
      <StyledCard
        key={id}
        onMouseEnter={() => setIsHovered(id)}
        onMouseLeave={() => setIsHovered(null)}
        className={isHovered === id ? "hovered" : ""}
        style={{ backgroundColor: isHovered === id ? backgroundColor : "", color: isHovered === id ? color : "" }}
      >
        <Title>{title}</Title>
        <Label className={isHovered === id ? "hovered" : ""}>{label}</Label>
      </StyledCard>
    </Link>
  );
}

const StyledCard = styled.div`
  width: 80vw;
  height: 8vh;
  display: flex;
  align-items: center;
  padding: 0 20px;
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

    .hovered {
      border-color: white;
      color: white;
    }
  }
`;

const Title = styled.div`
  flex: 1;    
`;

const Label = styled.div`
  border: 2px solid transparent;
  color: #bbbbbb;
  border-radius: 15px;
  padding: 1vh;
`;

export default Card;
