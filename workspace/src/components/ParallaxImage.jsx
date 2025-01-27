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
}) {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  // Add container scroll progress tracking
  const { scrollYProgress: containerScrollProgress } = useScroll({
    container: containerRef,
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
    // Thresholds for scrolling up and down
    const upThreshold = index === 0 ? 0.1 : 0.3;
    const downThreshold = index === 0 ? 0.3 : 0.5;

    if (progress > downThreshold) {
      // Scrolling down
      setCurrentImageIndex(index);
    } else if (progress < upThreshold && index > 0) {
      // Scrolling up - set to previous image
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
    <Container ref={containerRef}>
      {images.map((image, index) => {
        const itemRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: itemRef,
          container: containerRef,
          offset: ["start 60%", "center center"],
        });

        useMotionValueEvent(scrollYProgress, "change", (latest) => {
          handleScrollProgress(latest, index);
        });

        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
        const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1, 1]);

        const smoothOpacity = useSpring(opacity, {
          stiffness: 100,
          damping: 20,
        });

        const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });

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
      />
      <ImageCounterSlider
        color={color}
        backgroundColor={backgroundColor}
        images={images}
        currentIndex={currentImageIndex}
        scrollProgress={containerScrollProgress}
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
  padding-top: 8vh;
  right: 10vw;
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
  min-height: ${(props) => (props.isNative ? "500px" : "400px")};
  width: ${(props) => (props.isNative ? "25vw" : "40vw")};
  padding: 10px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
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
`;

const Info = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: "Roboto Flex";
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
`;

const Image = styled(motion.img)`
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
