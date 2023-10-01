import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Card({ id, path, title, label, color, backgroundColor }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    // const handleMouseEnter = () => {
    //   cursor.style.borderColor = "white";
    // };

    // const handleMouseLeave = () => {
    //   cursor.style.borderColor = "var(--dark)";
    // };

    if (isHovered) {
      cursor.style.borderColor = "white";
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
  width: 10vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 0 20px;
  font-size: 1.5em;
  font-weight: 700;
  color: var(--dark);
  border: 3px solid var(--dark);
  border-radius: 15px;
  transition: 0.3s; 
  font-family: 'Fugaz One', sans-serif;

  &:hover {
    color: white;
    font-size: 1.7em;
    margin-bottom: 25px ;
    height: 42vh;
    width: 11vw;

    .hovered {
      border-color: white;
      color: white;
    }
  }
`;

const Title = styled.div`
  flex: 1;    
  margin: 5px;
`;

const Label = styled.div`
  /* border: 2px solid transparent; */
  margin: 10px;
  color: #bbbbbb;
  border-radius: 15px;
  text-align: right;
`;

export default Card;
