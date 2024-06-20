import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function CustomCursor({color}) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  const cursorRef = useRef(); // Create a ref for the cursor

  useEffect(() => {
    const mouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 16}px`; // Add 10 pixels to the x-coordinate
        cursorRef.current.style.top = `${e.clientY - 16}px`; // Add 10 pixels to the y-coordinate
      }
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
    <Cursor ref={cursorRef} variants={variants} color={color} />
    </>
  )
}

const Cursor = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: fixed;
  z-index: 10;
  pointer-events: none; 

`;

export default CustomCursor