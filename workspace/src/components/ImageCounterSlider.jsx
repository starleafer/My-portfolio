import React from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import styled from "styled-components";

export default function ImageCounterSlider({
  color,
  backgroundColor,
  images,
  currentIndex,
  scrollProgress,
}) {
  return (
    <Container>
      <CounterContainer>
        {images.map((_, index) => {
          // Calculate ranges based on viewport positions
          const imageStart = index / images.length;
          const imageEnd = (index + 1) / images.length;
          const overlap = 0.1 / images.length; // Overlap between transitions

          const rawOpacity = useTransform(
            scrollProgress,
            [
              imageStart - overlap,     // Start fade in
              imageStart + overlap,     // Full opacity
              imageEnd - overlap,       // Start fade out
              imageEnd + overlap,       // Complete fade
            ],
            index === 0
              ? [1, 1, 1, 0.2]         // First counter starts visible
              : index === images.length - 1
              ? [0.1, 1, 1, 1]         // Last counter stays visible
              : [0.1, 1, 1, 0.2]       // Middle counters fade in/out
          );

          // Very relaxed spring for smooth transitions
          const counterOpacity = useSpring(rawOpacity, {
            stiffness: 30,
            damping: 12,
            mass: 1.5,
            restDelta: 0.00001
          });

          return (
            <Counter
              key={index}
              as={motion.div}
              color={color}
              style={{ opacity: counterOpacity }}
            ></Counter>
          );
        })}
      </CounterContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  bottom: 10vh;
  right: 5vw;
  z-index: 100;
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Counter = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: relative;
  overflow: hidden;
`;
