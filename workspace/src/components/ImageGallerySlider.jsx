import React, { useEffect, useRef, useState } from 'react';
import { motion as m, useScroll } from 'framer-motion';
import styled from 'styled-components';
import { SmoothScroll } from './SmoothScroll';
import Lenis from 'lenis';

const ImageGallerySlider = ({ color, images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: sliderRef.current,
      content: containerRef.current,
      duration: 1.2,
      orientation: 'vertical',
      smooth: true,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <>
      <Slider ref={sliderRef}>
        {images.map((image, index) => (
          <CardContainer
            ref={containerRef}
            className="image-card"
            data-index={index}
            key={index}
          >
            <Card
              key={index}
              style={{
                top: `${index * 35}px`,
              }}
            >
              <Image src={image.src} alt={image.alt || 'Image'} />
            </Card>
          </CardContainer>
        ))}
      </Slider>
    </>
  );
};


const Slider = styled.div`
  height: 100vh;
  width: 55vw;
  top: -0%;
  margin-top: 20vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CardContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
  margin-right: 2vw;
  margin-bottom: 5em;
`;

const Card = styled(m.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 500px;
  width: 1000px;
  border-radius: 25px;
  padding: 50px;
  transform-origin: top;
`;

const Image = styled.img`
  border-radius: 7px;
  width: 800px;
  height: 400px;
  border: 1px solid #6d6d6dae;
`;

export default ImageGallerySlider;