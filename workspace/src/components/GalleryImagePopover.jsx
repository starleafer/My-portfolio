import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion as m, AnimatePresence } from 'framer-motion';
import CustomButton from './CustomButton';

const GalleryImagePopover = ({ image, images = [], onClose, color, backgroundColor, title, shadowColor }) => {
  const [currentIndex, setCurrentIndex] = useState(images.indexOf(image));

  useEffect(() => {
    if (images.indexOf(image) === -1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(images.indexOf(image));
    }
  }, [image, images]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  const imageVariants = {
    enter: (direction) => ({
      x: direction === 1 ? 300 : -300, // Start off-screen
      opacity: 0,
    }),
    center: {
      x: 0, // Centered position
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === 1 ? -300 : 300, // Exit off-screen
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      {image && (
        <Overlay
          as={m.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <PopoverContent
            as={m.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ImageGroup>
              <PopoverImage
                src={currentImage.src}
                alt={currentImage.alt || 'Image'}
                onClick={onClose}

              />
              <ClosButtonContainer>
                <CustomButton color={color} border cleaning backgroundColor={backgroundColor} label="X" onClick={onClose} />
              </ClosButtonContainer>
            </ImageGroup>
            <NavigationGroup>
              <CustomButton width="20em" border cleaning color={color} backgroundColor={backgroundColor} shadowColor={shadowColor} title label="Previous Image" onClick={handlePrevious}
              />
              <CustomButton width="20em" border cleaning color={color} backgroundColor={backgroundColor} shadowColor={shadowColor} title label="Next Image" onClick={handleNext}
              />
            </NavigationGroup>

          </PopoverContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled(m.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopoverContent = styled(m.div)`
  border-radius: 10px;
  object-fit: cover; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

`;

const PopoverImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
  cursor: none; 
`;

const ImageGroup = styled.div`
  display: flex;
  gap: 5em;
  margin-top: 20px;
  align-items: flex-start; 
  justify-content: flex-end;
  margin-right: 2em;
`;

const ClosButtonContainer = styled.div`
width: 5em;
`;

const NavigationGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 4em;
  height: 4em;
  width: 25em;
`;

export default GalleryImagePopover;