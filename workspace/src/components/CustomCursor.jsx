import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CustomCursor = ({ x, y, isHovering, cursorColor, cursorHoverColor, size }) => {
  return (
    <CursorWrapper
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 0.2
      }}
      color={isHovering ? cursorHoverColor : cursorColor}
    />
  );
};

const CursorWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  mask-image: url('/mask.svg');
  mask-size: 40px;
  mask-position: 50% 50%;
  mask-repeat: no-repeat;
  background: ${props => props.color};
  pointer-events: none;
  z-index: 9999;
`;

export default CustomCursor;