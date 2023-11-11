import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useButtonContext } from '../context/ButtonContext';

function Card({ id, path, title, label, color, backgroundColor }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const { setButtonFade } = useButtonContext();

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked(true);
    setShowCircle(true);
    setButtonFade(true);
    console.log(id);
  
    const circleAnimationTimeout = setTimeout(() => {
      setIsClicked(false);
    }, 1300);
  
    const redirectTimeout = setTimeout(() => {
      window.location.href = `/${path}`;
    }, 600); 
  
    return () => {
      clearTimeout(circleAnimationTimeout);
      clearTimeout(redirectTimeout);
    };
  };
  
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    if (isHovered) {
      cursor.style.borderColor = "white";
      cursorDot.style.borderColor = "white";
      cursorDot.style.backgroundColor = "white";
    } else {
      cursor.style.borderColor = "var(--dark)";
      cursorDot.style.borderColor = "var(--dark)";
      cursorDot.style.backgroundColor = "var(--dark)";
    };
  }, [isHovered]);

  return (
    <Body>
      {showCircle && <Circle style={{ backgroundColor: isClicked ? backgroundColor : "" }} />}
        <StyledCard
          key={id}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(id)}
          onMouseLeave={() => setIsHovered(null)}
          className={`${isHovered === id ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
          style={{ backgroundColor: isHovered === id ? backgroundColor : "", color: isHovered === id ? color : "" }}
        >
          <Title>{title}</Title>
          <Label className={isHovered === id ? "hovered" : ""}>{label}</Label>
        </StyledCard>
      <Shadow className={isHovered ? "hovered" : ""} />
    </Body>
  );
}

const slide = keyframes`
    0% {
      left: -22vw;
    }
    100% {
      left: 100%;
    }
  `;

const CircleAnimation = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
}
100% {
  transform: scale(3);
  opacity: 1;
}
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  /* height: 100%; */

  @media (max-width: 768px) {
    /* justify-content: flex-start; */
  }
  `

const StyledCard = styled.div`
  width: 10vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  font-size: 1.5vw;
  font-weight: 700;
  color: var(--dark);
  border: 3px solid var(--dark);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  transition: transform 1s; 

  @media (max-width: 1200px) {
    border-width: 2px;
    width: 8vw;
    height: 30vh;
  }

  @media (max-width: 965px) {
    border-width: 1px;
    width: 7vw;
    padding: 0 10px;
    font-size: 1.2vw;
    border-radius: 10px;

  }

  @media (max-width: 768px) {
    border-width: 1px;
    height: 5vh;
    width: 82vw;
    align-items: center;
    border-radius: 5px;
    flex-direction: row;
    font-size: 1em;
  }

  @media (max-width: 375px) {
    width: 78vw;
  }




/* 
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    height: 40vw;
    width: 10vw;
    transform: skewX(-30deg);
    opacity: 0; 
  }

  &:after {
    width: 3vw;
  } 

   &.clicked::before,
  &.clicked::after {
    animation: ${slide} 0.4s forwards;
    opacity: 1; 
  } */
  
  &:hover {
    color: white;
    transform: translateY(-1.5vw);
    transition: transform 0.3s;
    
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
  margin: 10px;
  color: #bbbbbb;
  border-radius: 15px;
  text-align: right;
  `;

const Shadow = styled.div`
  width: 10vw;
  height: 2.1vh;
  border-radius: 50%;
  margin-top: 40px;
  background-color: #d8d8d8;
  border: 2px solid transparent;
  transition: transform 0.3s, width 0.8s;

  @media (max-width: 965px) {
    width: 8vw;
  }

  @media (max-width: 768px) {
    display: none;
  }

  &.hovered {
    width: 8vw;
    transform: scale(0.9);
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 70%;
  height: 100%;
  border-radius: 50%;
  background-color: transparent;
  animation: ${CircleAnimation} 0.7s ease-in-out forwards; 
  transform-origin: center;
  z-index: 9999;
  opacity: 1; 

  @media (max-width: 768px) {
    border-radius: 15px;
  }
`;

export default Card;
