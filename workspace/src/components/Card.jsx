import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Card({ id, path, title, label, color, backgroundColor }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    // const handleMouseEnter = () => {
    //   cursor.style.borderColor = "white";
    // };

    // const handleMouseLeave = () => {
    //   cursor.style.borderColor = "var(--dark)";
    // };

    if (isHovered) {
      cursor.style.borderColor = "white";
      cursorDot.style.borderColor = "white";
      cursorDot.style.backgroundColor = "white";
    }

    return () => {
      cursor.style.borderColor = "var(--dark)";
      cursorDot.style.borderColor = "var(--dark)";
      cursorDot.style.backgroundColor = "var(--dark)";
    };
  }, [isHovered]);

  return (
    <Body>
      <Link to={`/${path}`} style={{ textDecoration: 'none' }} className='link'>
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
      <Shadow className={isHovered ? "hovered" : ""} />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `


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
    margin-bottom: 3vw;
    
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

const Shadow = styled.div`
  width: 10vw;
  height: 2vh;
  border-radius: 50%;
  background-color: #d8d8d8;
  border: 2px solid transparent;
  transition: transform 0.3s, width 0.3s;

  &.hovered {
    width: 8vw;
    transform: scale(0.8);
  }
`;

export default Card;
