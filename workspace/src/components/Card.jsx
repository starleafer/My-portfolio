import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useButtonContext } from '../context/ButtonContext';
import { useNavigate } from 'react-router-dom';
import AnimatedCard from './card-animations/AnimatedCard';


function Card({ id, path, title, label, color, backgroundColor, setCursorHoverColor, setIsHovering  }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const { setButtonFade } = useButtonContext();
  const navigate = useNavigate();


  const handleClick = () => {
    setIsClicked(true);
    setShowCircle(true);
    setButtonFade(true);
    setIsHovering(false);
    console.log(id);

    const circleAnimationTimeout = setTimeout(() => {
      setIsClicked(false);
      navigate(`/${path}`);
      setButtonFade(false)
    }, 800);

    return () => {
      clearTimeout(circleAnimationTimeout);
    };
  }

  return (
    <Body>
      {showCircle && <Circle style={{ backgroundColor: isClicked ? backgroundColor : "" }} />}
      <CardContainer>
        <StyledCard
          key={id}
          onClick={handleClick}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
          onFocus={() => setIsHovered(id)}
          onBlur={() => setIsHovered(null)}
          onMouseEnter={() => { setIsHovered(id); setCursorHoverColor(color); setIsHovering(true) }} // Update hover color
          onMouseLeave={() => { setIsHovered(null); setCursorHoverColor('var(--darker)'); setIsHovering(false) }} // Reset hover color
          className={`${isHovered === id ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
          style={{ backgroundColor: isHovered === id ? backgroundColor : "", color: isHovered === id ? color : "" }}
        >
          <Title className={isHovered === id ? "fade-out" : "fade-in"}>{title}</Title>
          <Label className={isHovered === id ? "fade-out" : "fade-in"}>{label}</Label>
          <AnimatedCard isVisible={isHovered === id} id={id} delay="0.3s" />
        </StyledCard>
      </CardContainer>
    </Body>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeInShadow = keyframes`
0% {
  box-shadow: 0 0 0 var(--dark);
}
100% {
  box-shadow: 1vw 1vw var(--dark);
}
`;

const fadeOutShadow = keyframes`
  0% {
    box-shadow: 1vw 1vw var(--dark);
  }
  100% {
    box-shadow: 0 0 0 var(--dark);
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
`

const CardContainer = styled.div`
  position: relative;

`;

const StyledCard = styled.div.attrs({
  tabIndex: 0,
})`
  width: 12vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  position: relative;
  /* padding: 0 20px; */
  font-size: 1.5vw;
  font-weight: 700;
  color: var(--dark);
  border: 3px solid var(--dark);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 1s; 

  &:hover {
    color: #fff;
    transform: translateY(-1.5vw);
    transition: transform 0.3s;
    animation: ${fadeInShadow} 0.5s ease forwards;

    .title {
      animation: ${fadeOut} 0.5s forwards;
    }
    
    .hovered {
      color: white;
    }
  }

  &:not(:hover) {
    animation: ${fadeOutShadow} 0.8s ease forwards;

    .title {
      animation: ${fadeIn} 0.5s forwards;
    }
  }

  &:focus {
    outline: none;
    transform: translateY(-1.5vw);
    transition: transform 0.3s;
    animation: ${fadeInShadow} 0.5s ease forwards;
  }

  @media (max-width: 1200px) {
    border-width: 2px;
    width: 9vw;
    max-height: 35vh;
  }


  @media (max-width: 768px) {
    border-width: 1px;
    height: 5vh;
    width: 85vw;
    align-items: center;
    border-radius: 5px;
    flex-direction: row;
    font-size: 1em;

    &:hover {
      color: var(--dark) !important;
      background-color: transparent !important;
      transform: none;
      
    }
  }

  @media (max-width: 425px) {

    width: 75vw;

    &:hover {
      color: var(--dark) !important;
      background-color: transparent !important;
      transform: none;
    }
  }
  `;

const Title = styled.div`
  flex: 1;
  margin: 5px;
  margin-left: 10px;

  &.fade-in {
    animation: ${fadeIn} 0.5s forwards;
  }

  &.fade-out {
    animation: ${fadeOut} 0.5s forwards;
  }
`;

const Label = styled.div`
  margin: 10px;
  color: #bbbbbb;
  border-radius: 15px;
  text-align: right;

  &.fade-in {
    animation: ${fadeIn} 0.5s forwards;
  }

  &.fade-out {
    animation: ${fadeOut} 0.5s forwards;
  } 

    @media (max-width: 768) {
    &.nohover {
      color: #bbbbbb !important;
    }
  }
    @media (max-width: 375px) {
    &.nohover {
      color: #bbbbbb !important;
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 70%;
  height: 80%;  
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
