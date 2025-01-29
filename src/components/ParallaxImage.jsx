import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import styled from "styled-components";
import Lenis from "lenis";
import ImageCounterSlider from "./ImageCounterSlider";
import GalleryImagePopover from "./GalleryImagePopover";

export default function ParallaxImage({
  images = [],
  backgroundColor,
  color,
  invertedColors,
  isNative,
  doubleRepo,
  isSwitchActive,
}) {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  const { scrollYProgress: containerScrollProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: containerRef.current,
      content: containerRef.current,
      duration: 1.2,
      orientation: "vertical",
      smooth: true,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    setLenisInstance(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleScrollProgress = (progress, index) => {
    const upThreshold = index === 0 ? 0.1 : 0.3;
    const downThreshold = index === 0 ? 0.3 : 0.5;

    if (progress > downThreshold) {
      setCurrentImageIndex(index);
    } else if (progress < upThreshold && index > 0) {
      setCurrentImageIndex(index - 1);
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
    lenisInstance?.stop();
  };

  const handleClosePopover = () => {
    setSelectedImage(null);
    lenisInstance?.start();
  };

  return (
    <Container ref={containerRef} isNative={isNative}>
      {images.map((image, index) => {
        const itemRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: itemRef,
          container: containerRef,
          offset: ["start 60%", "center center"],
        });

        const scale = useTransform(
          containerScrollProgress,
          [0, 1],
          [1, 1 - ((images.length - index) * 0.05)]
        );

        useMotionValueEvent(scrollYProgress, "change", (latest) => {
          handleScrollProgress(latest, index);
        });

        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
        const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1, 1]);

        const smoothOpacity = useSpring(opacity, {
          stiffness: 100,
          damping: 20,
        });

        const smoothScale = useSpring(imageScale, { stiffness: 100, damping: 20 });

        const imageUrl = image.src || image;
        const imageAlt = image.alt || `Image ${index + 1}`;

        const adjustBackgroundColor = (index, totalImages, color) => {
          const step = 75 / (totalImages - 1);
          const percentage = 15 + index * step;

          const adjustedPercentage = Math.min(percentage, 90);

          return `color-mix(in srgb, ${color} ${adjustedPercentage}%, black)`;
        };

        return (
          <CardWrapper
            key={image.id || index}
            onClick={() => handleImageClick(image)}
            ref={itemRef}
            isFirst={index === 0}
            isLast={index === images.length - 1}
            isNative={isNative}
            style={{
              backgroundColor: adjustBackgroundColor(
                index,
                images.length,
                invertedColors ? color : backgroundColor
              ),
              color: invertedColors ? backgroundColor : color,
              top: isNative ? `${index * 10}px` : `${index * 35}px`,
              marginBottom: index === images.length - 1 ? "40vh" : "0",
              scale,
            }}
          >
            <InfoContainer>
              <Info>{image.info}</Info>
            </InfoContainer>
            <ImageContainer isNative={isNative}>
              <Image
                src={imageUrl}
                alt={imageAlt}
                style={{
                  opacity: smoothOpacity,
                  scale: smoothScale,
                }}
              />
            </ImageContainer>
          </CardWrapper>
        );
      })}
      <GalleryImagePopover
        image={selectedImage}
        images={images}
        onClose={handleClosePopover}
        color={color}
        backgroundColor={backgroundColor}
        invertedColors={invertedColors}
        isNative={isNative}
        doubleRepo={doubleRepo}
      />
      <ImageCounterSlider
        color={color}
        images={images}
        scrollProgress={containerScrollProgress}
        isNative={isNative}
        doubleRepo={doubleRepo}
        isSwitchActive={isSwitchActive}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  padding-top: 3vh;
  right: ${(props) => (props.isNative ? "3vw" : "10vw")};

  @media (max-width: 768px) and (min-width: 321px) {
    right: 3vw;
  }
  

`;

const CardWrapper = styled(motion.div)`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: sticky;
  gap: ${(props) => (props.isNative ? "0" : "5em")};
  left: 50vw;
  margin-top: ${(props) => (props.isFirst ? "0" : "80vh")};
  min-height: ${(props) => (props.isNative ? "450px" : "400px")};
  width: ${(props) => (props.isNative ? "25vw" : "40vw")};
  padding: 10px 20px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;

  @media (max-width: 1536px) and (min-width: 769px) {
    gap: ${(props) => (props.isNative ? "0" : "2em")};
    width: ${(props) => (props.isNative ? "30vw" : "40vw")};
    min-height: ${(props) => (props.isNative ? "330px" : "300px")};
    padding: 0 20px;
  }

  @media (max-width: 768px) and (min-width: 321px) {
    width: ${(props) => (props.isNative ? "60vw" : "75vw")};
    left: ${(props) => (props.isNative ? "25vw" : "15vw")};
    justify-content: flex-start;
    margin-left: 1em;

  }

`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  font-size: 1rem;
  margin: 0 0 10px 30px;
  width: 170px;
  left: 20px;

  @media (max-width: 1536px) and (min-width: 769px) {
    margin: 0 0 10px 10px;
  }
`;

const Info = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: 'Lato', sans-serif;   /* Roboto Flex; */


  @media (max-width: 1536px) and (min-width: 769px) {
    font-size: 1.2vw;
  }
`;

const ImageContainer = styled.div`

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.isNative ? "60%" : "60%")};
  height: ${(props) => (props.isNative ? "400px" : "300px")};
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 1536px) {
    height: ${(props) => (props.isNative ? "300px" : "200px")};
    width: ${(props) => (props.isNative ? "50%" : "60%")};
  }
`;

const Image = styled(motion.img)`
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
