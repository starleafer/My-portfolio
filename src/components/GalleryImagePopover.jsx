import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion as m, AnimatePresence } from "framer-motion";
import CustomButton from "./CustomButton";
import { usePopover } from "../context/PopoverContext";

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
  const { setIsPopoverOpen } = usePopover();
  const [currentIndex, setCurrentIndex] = useState(images.indexOf(image));
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (images.indexOf(image) === -1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(images.indexOf(image));
    }
  }, [image, images]);

  useEffect(() => {
    setIsPopoverOpen(!!image);  
    return () => setIsPopoverOpen(false);  
  }, [image, setIsPopoverOpen]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const currentImage = images[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
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
            isNative={isNative}
            as={m.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ImageGroup isNative={isNative}>
              <ImageContainer isNative={isNative}>
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <PopoverImage
                    key={currentImage.src}
                    as={m.img}
                    src={currentImage.src}
                    alt={currentImage.alt || "Image"}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                        mass: 0.4,
                        restSpeed: 0.5,
                      },
                      opacity: {
                        duration: 0.2,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 0.2,
                        ease: "easeOut",
                      },
                      filter: {
                        duration: 0.15,
                        ease: "easeOut",
                      },
                    }}
                    onClick={onClose}
                    isNative={isNative}
                    backgroundColor={backgroundColor}
                  />
                </AnimatePresence>
              </ImageContainer>
              <ClosButtonContainer isNative={isNative}>
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
            <NavigationGroup isNative={isNative}>
              <CustomButton
                color={color}
                backgroundColor={backgroundColor}
                invertedColors={invertedColors}
                shadowColor={shadowColor}
                onClick={handlePrevious}
                width={"7em"}
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
                width={"7em"}
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
  z-index: 9999;  
  isolation: isolate; 


  @media (max-width: 768px) and (min-width: 320px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    align-items: flex-start;
    position: absolute;
    overflow-y: auto;
    padding: 1em 0;
  }
`;

const PopoverContent = styled(m.div)`
  position: relative; 
  z-index: 10000; 
  border-radius: 10px;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    height: auto;
    width: auto;
    margin-left: ${(props) => (props.isNative ? "23vw" : "8vw")};

  }

  @media (max-width: 768px) and (orientation: landscape) {
    gap: 1em;
    min-height: 100vh;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: ${(props) => (props.isNative ? "25%" : "100%")};
  height: ${(props) => (props.isNative ? "80vh" : "700px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
  position: relative;

  @media (max-width: 1536px) and (min-width: 768px) {
    width: ${(props) => (props.isNative ? "20%" : "80%")};
    height: ${(props) => (props.isNative ? "80vh" : "600px")};
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: ${(props) => (props.isNative ? "55vw" : "85vw")};
    height: ${(props) => (props.isNative ? "auto" : "60vh")};
    max-height: 70vh;

  }

  @media (max-width: 768px) and (orientation: landscape) {
    width: 85vw;
    height: 70vh;
    margin: 0 auto;
  }
`;

const PopoverImage = styled(m.img)`
  width: ${(props) => (props.isNative ? "70%" : "auto")};
  height: ${(props) => (props.isNative ? "auto" : "100%")};
  max-height: 100%;
  object-fit: cover;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  @media (max-width: 1536px) and (min-width: 769px) {
    width: ${(props) => (props.isNative ? "80%" : "100%")};
    height: ${(props) => (props.isNative ? "auto" : "100%")};
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: ${(props) => (props.isNative ? "100%" : "100%")};
    height: auto;
    max-height: ${(props) => (props.isNative ? "70vh" : "60vh")};
    min-height: 200px;
    display: block;
    position: relative;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    width: auto;
    height: auto;
    max-width: 70vw;
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
  height: 100vh;
  margin-top: 0;
  z-index: 135;
  top: 1vw;
  right: ${(props) => (props.isNative ? "5vw" : "3vw")};

  @media (max-width: 768px) and (min-width: 320px) {
    top: ${(props) =>
      props.isNative ? "2em" : props.doubleRepo ? "-5em" : "-5em"};
    right: ${(props) => (props.isNative ? "-4em" : "1.9em")};
  }
`;

const NavigationGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 4em;
  height: 4em;
  width: 100%;
  margin-top: auto;
  padding-bottom: 2em;

  @media (max-width: 768px) and (min-width: 320px) {
    left: 20px;

  }
`;

export default GalleryImagePopover;
