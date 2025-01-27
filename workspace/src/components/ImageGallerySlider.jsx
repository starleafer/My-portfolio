import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import Lenis from 'lenis';
import ImageCounterSlider from './ImageCounterSlider';
import GalleryImagePopover from './GalleryImagePopover';

const ImageGallerySlider = ({ color, backgroundColor, isNative, shadowColor, invertedColors, images = [] }) => {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const sliderRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sliderRef,
    offset: ["start end", "end end"],
  });


  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: sliderRef.current,
      duration: 1.2,
      smooth: true,
      orientation: "vertical",
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

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopover = () => {
    setSelectedImage(null);
  };

  return (
    <Contents>
      <Slider ref={sliderRef}>
        {images.map((image, index) => (
          <CardContainer key={index}>
            <Card
           
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image.src}
                alt={image.alt || "Image"}
                isNative={isNative}
                style={{
                  opacity: scrollYProgress.get(),          
                }}
              />
            </Card>
          </CardContainer>
        ))}
      </Slider>
      <GalleryImagePopover
        image={selectedImage}
        images={images}
        onClose={handleClosePopover}
        color={color}
        invertedColors={invertedColors}
        backgroundColor={backgroundColor}
        shadowColor={shadowColor}
        isNative={isNative}
      />
      <ImageCounterSlider
        color={color}
        backgroundColor={backgroundColor}
        images={images}
        scrollRef={sliderRef}
      />
    </Contents>
  );
};

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;

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
  top: 150px;
  margin: 0 0 25vh 40vw;
  border: 1px solid red;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 500px;
  width: 1000px;
  border-radius: 25px;
  padding: 50px;
  transform-origin: top;
  cursor: pointer;
`;

const Image = styled(motion.img)`
  width: ${(props) => (props.isNative ? '13em' : 'clamp(400px, 50vw, 800px)')};
  height: ${(props) => (props.isNative ? '25em' : 'clamp(200px, 25vw, 400px)')};
  cursor: none;
`;

export default ImageGallerySlider;
