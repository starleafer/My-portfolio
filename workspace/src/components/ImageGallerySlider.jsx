import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion as m, AnimatePresence } from 'framer-motion';
import Switch from './Switch';

const ImageGallerySlider = ({
  images = [],
  color,
  backgroundColor,
  shadowColor,
  showSwitch,
  isNative,
  isSwitchActive,
  setIsSwitchActive
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [initialPosition, setInitialPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const imageRef = useRef(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getStackIndices = () => {
    const indices = [];
    let current = currentIndex;
    for (let i = 0; i < Math.min(5, images.length); i++) {
      indices.push(current);
      current = (current + 1) % images.length;
    }
    return indices;
  };

  const handleImageClick = (image, isFirstImage) => {
    if (isFirstImage && imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setInitialPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
    setSelectedImage(selectedImage === image ? null : image);
  };

  return (
    <>
      <Gallery
        as={m.div}
        initial={false}
        animate={{
          width: isSwitchActive || isNative ? '30vw' : '50vw',
          transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
        }}
        isSwitchActive={isSwitchActive}
        isNative={isNative}
      >
        <NavButton
          onClick={goToPrevious}
          color={color}
          backgroundColor={backgroundColor}
          shadowColor={shadowColor}
        >
          <Arrow left>&lt;</Arrow>
        </NavButton>

        <ViewerContainer showSwitch={showSwitch}>
          <ImageStack
            as={m.div}
            animate={{
              scale: isSwitchActive || isNative ? 1 : 1,
              x: isSwitchActive || isNative ? '10%' : '0%',
              transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
              exit: { opacity: 0 }
            }}
          >
            <AnimatePresence initial={false} mode="wait">
              {getStackIndices().map((imageIndex, stackIndex) => {
                const image = images[imageIndex];
                if (!image) return null;

                return (
                  <ImageContainer
                    key={`${image.id}-${stackIndex}`}
                    as={m.div}
                    initial={{ opacity: 0}}
                    animate={{
                      opacity: 1,
                      x: stackIndex * 20,
                      y: -stackIndex * 10,
                      transition: { duration: 0.5, delay: stackIndex * 0.1 }
                    }}                   
                    style={{
                      zIndex: stackIndex === images.length - 1 ? -1 : images.length - stackIndex,
                    }}
                    onClick={() => stackIndex === 0 && handleImageClick(image, true)}
                    isClickable={stackIndex === 0}
                    isNative={isNative}
                  >
                    <StyledImage
                      as={m.img}
                      ref={stackIndex === 0 ? imageRef : null}
                      isNative={isNative}
                      isSwitchActive={isSwitchActive}
                      shadowColor={shadowColor}
                      src={image.src}
                      alt={image.alt || 'Image'}
                      isClickable={stackIndex === 0}
                      whileHover={stackIndex === 0 ? { scale: 1.04 } : {}}
                      animate={{
                        transition: { duration: 0.5 }
                      }}
                    />
                  </ImageContainer>
                );
              })}
            </AnimatePresence>
          </ImageStack>
          {showSwitch && (
            <Switch
              color={color}
              backgroundColor={backgroundColor}
              shadowColor={shadowColor}
              isSwitchActive={isSwitchActive}
              setIsSwitchActive={setIsSwitchActive}
            />
          )
          }
        </ViewerContainer>

        <NavButton
          onClick={goToNext}
          color={color}
          backgroundColor={backgroundColor}
          shadowColor={shadowColor}
        >
          <Arrow>&gt;</Arrow>
        </NavButton>
      </Gallery>

      <AnimatePresence>
        {selectedImage && (
          <Modal
            as={m.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <ModalContent
              shadowColor={shadowColor}
              as={m.div}
              onClick={e => e.stopPropagation()}
              initial={{
                position: 'fixed',
                top: initialPosition.top,
                left: initialPosition.left,
                width: initialPosition.width,
                height: initialPosition.height,
                scale: 1
              }}
              animate={{
                top: 80,
                left: 130,
                width: '85vw',
                height: '85vh',
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              exit={{
                position: 'fixed',
                top: initialPosition.top,
                left: initialPosition.left,
                width: initialPosition.width,
                height: initialPosition.height,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              <CloseButton
                onClick={() => setSelectedImage(null)}
                color={color}
                backgroundColor={backgroundColor}
              >
                ×
              </CloseButton>
              <ModalImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                onClick={() => setSelectedImage(null)}
              />
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

const Gallery = styled(m.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3em;
`;

const ViewerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 6.5em;
  position: relative;
  max-width: 800px;
  width: 100%;
  height: 600px;
  top: 1em;
`;

const ImageStack = styled(m.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60em;
  margin: 1em 0 0 3em;
  right: 2em;
`;

const ImageContainer = styled(m.div)`
  position: absolute;
  display: flex;
  width: ${props => props.isSwitchActive || props.isNative  ? '45em' : '95em'};
  height: 100%;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
`;

const StyledImage = styled(m.img)`
  min-width: ${props => props.isSwitchActive || props.isNative ? '10em' : '5em'};
  height: ${props => props.isSwitchActive || props.isNative ? '65em' : '65em'};
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${(props) => props.shadowColor};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SwitchContainer = styled(m.div)`
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
`;

// Rest of the styled components remain unchanged
const NavButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: 10px;
  width: 40px;
  height: 40px;
  padding: 1.5em;
  margin-bottom: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.shadowColor};
    color: ${(props) => props.color};
  }
`;

const Arrow = styled.span`
  font-size: 1.5vw;
`;

const Modal = styled(m.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
`;

const ModalContent = styled(m.div)`
  position: relative;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -30px;
  right: -60px;
  background: none;
  border-radius: 15px;
  color: ${(props) => props.backgroundColor};
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.backgroundColor};
  padding: 8px;
  font-size: 62px;
  line-height: 24px;
  transition: color 0.3s ease;
  z-index: 1001;

  &:hover {
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    border-color: ${(props) => props.color};
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 15px;
  z-index: 1000;
`;

export default ImageGallerySlider;