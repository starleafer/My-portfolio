import React from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import styled, { keyframes } from "styled-components";

export default function ImageCounterSlider({
  color,
  images,
  scrollProgress,
  isNative,
  doubleRepo,
  isSwitchActive,
}) {
  return (
    <Container
      isNative={isNative}
      isSwitchActive={isSwitchActive}
      key={isSwitchActive}
      doubleRepo={doubleRepo}
    >
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
            restDelta: 0.00001,
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  bottom: 10vh;
  right: ${(props) => {
    if (props.doubleRepo) {
      return props.isSwitchActive ? "5vw" : "12vw";
    }
    return props.isNative ? "12vw" : "5vw";
  }};
  z-index: 100;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  animation-delay: 0.5s;

  @media (max-width: 768px) and (min-width: 321px) {
    display: none;
    /* position: relative;
    height: 20vh;
    top: 50vh; */

  }

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
