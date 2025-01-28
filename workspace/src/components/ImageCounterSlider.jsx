import React from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import styled from "styled-components";

export default function ImageCounterSlider({
  color,
  backgroundColor,
  images,
  currentIndex,
  scrollProgress,
  isNative,
}) {
  return (
    <Container isNative={isNative}>
      <CounterContainer>
        {images.map((_, index) => {
          const imageStart = index / images.length;
          const imageEnd = (index + 1) / images.length;
          const overlap = 0.1 / images.length; 

          const rawOpacity = useTransform(
            scrollProgress,
            [
              imageStart - overlap,
              imageStart + overlap,
              imageEnd - overlap,
              imageEnd + overlap,
            ],
            index === 0
              ? [1, 1, 1, 0.2]
              : index === images.length - 1
              ? [0.1, 1, 1, 1]
              : [0.1, 1, 1, 0.2]
          );

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
  right: ${(props) => (props.isNative ? "12vw" : "5vw")};
  z-index: 100;

  /* @media (max-width: 1536px) {
    bottom: 10vh;
    right: 2vw;
  }  */
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
