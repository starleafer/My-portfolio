import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CustomCursor = ({ x, y, isHoveringCards, isHoverButton, cursorColor, cursorHoverColor, size }) => {
  const baseSize = size;
  const expandedSize = size * 2;

  const offsetX = 30;
  const offsetY = 35;

   return (
    <CursorWrapper
      animate={{
        x: x + offsetX - (isHoverButton ? expandedSize : baseSize),
        y: y + offsetY - (isHoverButton ? expandedSize : baseSize),
        width: isHoverButton ? expandedSize : baseSize,
        height: isHoverButton ? expandedSize : baseSize,
        backgroundColor: isHoveringCards ? cursorHoverColor : cursorColor,
      }}
      transition={{
        x: { type: 'tween', ease: 'backOut', duration: 0.4 },
        y: { type: 'tween', ease: 'backOut', duration: 0.4 },
        width: { type: 'tween', ease: 'backOut', duration: 0.4 },
        height: { type: 'tween', ease: 'backOut', duration: 0.4 },
      }}
      color={isHoveringCards ? cursorHoverColor : 'var(--dark)'}
    />
  );
};

const CursorWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  mask-image: none;
  background: ${props => props.color};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  
`;

export default CustomCursor;