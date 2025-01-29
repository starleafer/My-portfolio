import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion as m, AnimatePresence } from "framer-motion";
import CustomButton from "./CustomButton";

const GalleryImagePopover = ({
  image,
  images = [],
  onClose,
  color,
  backgroundColor,
  invertedColors,
  doubleRepo,
  shadowColor,
  isNative,
}) => {
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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const currentImage = images[currentIndex];

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
            <ImageGroup isNative={isNative}>
              <ImageContainer isNative={isNative}>
                <PopoverImage
                  src={currentImage.src}
                  alt={currentImage.alt || "Image"}
                  onClick={onClose}
                  isNative={isNative}
                  backgroundColor={backgroundColor}
                />
              </ImageContainer>
              <ClosButtonContainer>
                <CustomButton
                  color={color}
                  backgroundColor={backgroundColor}
                  invertedColors={invertedColors}
                  shadowColor={shadowColor}
                  onClick={onClose}
                  label="X"
                  padding=".7em"
                  border
                  hasIcon
                  small
                />
              </ClosButtonContainer>
            </ImageGroup>
            <NavigationGroup>
              <CustomButton
                color={color}
                backgroundColor={backgroundColor}
                invertedColors={invertedColors}
                shadowColor={shadowColor}
                onClick={handlePrevious}
                width={"10em"}
                label="Previous"
                border
                title
                hasIcon
                previous
              />
              <CustomButton
                color={color}
                backgroundColor={backgroundColor}
                invertedColors={invertedColors}
                shadowColor={shadowColor}
                onClick={handleNext}
                label="Next "
                width={"10em"}
                border
                title
                hasIcon
                next
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
  z-index: 130;
`;

const PopoverContent = styled(m.div)`
  border-radius: 10px;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
`;

const ImageContainer = styled.div`
  width: ${(props) => (props.isNative ? "35%" : "100%")};
  height: ${(props) => (props.isNative ? "auto" : "700px")}; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};

  @media (max-width: 1536px) {
    width: ${(props) => (props.isNative ? "60%" : "80%")};
    height: ${(props) => (props.isNative ? "auto" : "400px")};
  }
`;

const PopoverImage = styled(m.img)`
  width: ${(props) => (props.isNative ? "100%" : "auto")};
  height: ${(props) => (props.isNative ? "auto" : "100%")}; 
  max-height: 100%;
  object-fit: cover;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 1536px) {
    width: ${(props) => (props.isNative ? "100%" : "auto")};
    height: ${(props) => (props.isNative ? "auto" : "100%")};
  }

  @media (max-width: 768px) and (min-width: 321px) {
    width: ${(props) => (props.isNative ? "70%" : "auto")};
    height: ${(props) => (props.isNative ? "auto" : "100%")};
  }
`;

const ImageGroup = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: 0;
  margin-left: 0;
  position: relative;
`;

const ClosButtonContainer = styled.div`
  position: absolute;
  top: 5em;
  right: -8em;
  width: 5em;
  margin-top: 0;
  z-index: 110;

  @media (max-width: 768px) and (min-width: 321px) {
    top: ${(props) => props.isNative ? "2em" : props.doubleRepo ? "-5em" : "1em"};
    right: 4em;
  }
`;

const NavigationGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 4em;
  height: 4em;
  width: 25em;
  margin-top: auto;
  padding-bottom: 2em;
`;

export default GalleryImagePopover;
