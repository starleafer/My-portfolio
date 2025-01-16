import React, { useEffect, useRef, useState } from 'react';
import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import Lenis from 'lenis';
import ImageCounterSlider from './ImageCounterSlider';
import GalleryImagePopover from './GalleryImagePopover';

const ImageGallerySlider = ({ color, backgroundColor, isNative, shadowColor, invertedColors, images = [] }) => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopover = () => {
    setSelectedImage(null);
  };

  return (
    <Contents>
      <ImageCounterSlider
        color={color}
        backgroundColor={backgroundColor}
        images={images}
        scrollRef={sliderRef}
      />
      <Slider ref={sliderRef}>
        {images.map((image, index) => (
          <CardContainer
            ref={containerRef}
            className="image-card"
            data-index={index}
            key={index}
          >
            <Card
              style={{
                top: `${index * 35}px`,
              }}
              onClick={() => handleImageClick(image)}
            >
              <Image src={image.src} alt={image.alt || 'Image'} isNative={isNative} />
            </Card>
          </CardContainer>
        ))}
        <div style={{ height: '100vh' }} />
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
    </Contents>
  );
};

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Slider = styled.div`
  height: 100vh;
  width: 55vw;
  bottom: 14em;
  margin-top: 22vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  /* padding-bottom: 5vh; */

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
  cursor: none;
`;

const Image = styled.img`
  border-radius: 4px;
  width: ${(props) => (props.isNative ? '13em' : '50em')};
  height: ${(props) => (props.isNative ? '25em' : '25em')};
  border: 1px solid #424242ad;
  cursor: none; 

`;

export default ImageGallerySlider;