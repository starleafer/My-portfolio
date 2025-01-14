import React from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageCounterSlider = ({ color, backgroundColor, images = [], scrollRef }) => {
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ["start end", "end end"],
  });

  const scalesAndOpacities = images.map((_, index) => {
    const rangeStart = index / images.length;
    const rangeEnd = (index + 1) / images.length;

    return {
      scale: index === 0 
        ? useTransform(scrollYProgress, [0, rangeEnd], [1.5, 1.5]) 
        : useTransform(scrollYProgress, [rangeStart, rangeEnd], [1, 1.5]),
      opacity: index === 0 
        ? useTransform(scrollYProgress, [0, rangeEnd], [1, 1]) 
        : useTransform(scrollYProgress, [rangeStart, rangeEnd], [0.5, 1]),
    };
  });

  return (
    <CounterContainer>
      {images.map((_, index) => (
        <Indicator
          key={index}
          style={{
            scale: scalesAndOpacities[index].scale,
            opacity: scalesAndOpacities[index].opacity,
            backgroundColor: color,
            borderColor: backgroundColor,
          }}
        />
      ))}
    </CounterContainer>
  );
};

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transform: translateY(13rem); 
`;

const Indicator = styled(m.div)`
  width: 12px;
  height: 12px;
  border: 2px solid;
  border-radius: 50%;
`;

ImageCounterSlider.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  scrollRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default ImageCounterSlider;
