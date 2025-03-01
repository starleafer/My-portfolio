import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Curve = ({ color }) => {
  const initialPath = `M100 0 L201 0 L201 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`;
  const targetPath = `M100 0 L201 0 L201 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`;

  const curve = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  }

  return (
    <CurveContainer>
      <svg width="100%" height="100%" viewBox="0 0 201 100%" preserveAspectRatio="none">
        <motion.path
          fill={color}
          variants={curve}
          initial="initial"
          animate="enter"
          exit="exit"
        />
      </svg>
    </CurveContainer>
  );
};

export default Curve;

const CurveContainer = styled.div`
  position: absolute;
  top: 0;
  left: -100px;
  width: 101px;
  height: 100%;
  pointer-events: none;
`;
