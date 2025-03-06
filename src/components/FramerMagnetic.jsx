import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const FramerMagnetic = ({ children, isOpen }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (event) => {
    if (isOpen) return; 
    
    const { clientX, clientY } = event;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    const mouseX = clientX - (left + width / 2);
    const mouseY = clientY - (top + height / 2);
    
    const reach = 70;
    
    const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
    if (distance < reach) {
      const dampenedX = mouseX * 0.8;
      const dampenedY = mouseY * 0.8;
      setPosition({ x: dampenedX, y: dampenedY });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={position}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
};

export default FramerMagnetic;
