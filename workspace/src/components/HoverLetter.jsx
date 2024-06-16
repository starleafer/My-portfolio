import React, { useState } from 'react';
import styled from 'styled-components';

const HoverLetter = ({ letter }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <LetterSpan
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isHovered={isHovered}
    >
      {letter}
    </LetterSpan>
  );
};

const LetterSpan = styled.span`
  color: ${(props) => (props.isHovered ? 'var(--redish)' : 'white')};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${(props) => (props.isHovered ? 'var(--blueish)' : 'var(--dark)')};
  transition: color 0.5s ease, -webkit-text-stroke-color 0.5s ease;
`;

export default HoverLetter;
