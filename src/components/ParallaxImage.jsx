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
  textColor,
}) {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [lenisInstance, setLenisInstance] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && containerRef.current?.scrollTop > 20) {
        setHasScrolled(true);
      }
    };

    const isMobile = window.innerWidth <= 768 && window.innerWidth >= 321;
    if (isMobile) {
      containerRef.current?.addEventListener('scroll', handleScroll);
      return () => containerRef.current?.removeEventListener('scroll', handleScroll);
    }
  }, [hasScrolled]);

  return (
    <Container ref={containerRef} isNative={isNative}>
      {window.innerWidth <= 768 && window.innerWidth >= 321 && !hasScrolled && (
        <ScrollArrow color={color} />
      )}
      {images.map((image, index) => {
        const itemRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: itemRef,
          container: containerRef,
          offset: ["start 60%", "center center"],
          default: 0
        });

        const scale = useTransform(
          containerScrollProgress || 0,
          [0, 1],
          [1, 1 - ((images.length - index) * 0.05)]
        );

        const yPos = useTransform(
          containerScrollProgress || 0,
          [0, 1],
          [0, -((images.length - index) * 15)]
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
            textColor={textColor}
            style={{
              backgroundColor: adjustBackgroundColor(
                index,
                images.length,
                invertedColors ? color : backgroundColor
              ),
              color: invertedColors ? backgroundColor : color,
              top: isNative ? `${index * 10}px` : `${index * 10}px`,
              marginBottom: index === images.length - 1 ? "40vh" : "0",
              scale,
              y: yPos,
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
  overflow-y: hidden;
  right: ${(props) => (props.isNative ? "3vw" : "10vw")};
  padding: 40px;

  @media (max-width: 768px) and (min-width: 320px) {
    right: 3vw;
    padding-top: 40px;
    margin-top: 5vh;
    height: auto;  
    overflow-y: scroll;  
    -webkit-overflow-scrolling: touch;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    
    -ms-overflow-style: none;  
    scrollbar-width: none;  
  }
`; 

const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  position: sticky;
  gap: 0;
  left: 50vw;
  margin-top: ${(props) => (props.isFirst ? "0" : "80vh")};
  min-height: ${(props) => (props.isNative ? "450px" : "360px")};
  width: ${(props) => (props.isNative ? "25vw" : "40vw")};
  padding: 30px 20px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;

  @media (max-width: 1536px) and (min-width: 769px) {
    gap: ${(props) => (props.isNative ? "0" : "1em")};
    width: ${(props) => (props.isNative ? "30vw" : "40vw")};
    min-height: ${(props) => (props.isNative ? "330px" : "300px")};
    padding:  20px;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: ${(props) => (props.isNative ? "60vw" : "72vw")};
    left: ${(props) => (props.isNative ? "25vw" : "15vw")};
    margin-left: 1em;
    flex-direction: column-reverse;
    gap: 0;
    padding: 20px;
  }

`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  font-size: 1rem;
  margin: 0 0 10px 30px;
  left: 20px;

  @media (max-width: 1536px) and (min-width: 769px) {
    margin: 0 0 10px 10px;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    margin: 0 0 10px 10px;
    width: 90%;
  }
`;

const Info = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: 'Lato', sans-serif;   


  @media (max-width: 1536px) and (min-width: 769px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.isNative ? "60%" : "100%")};
  height: ${(props) => (props.isNative ? "400px" : "300px")};
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 1536px) and (min-width: 769px) {
    height: ${(props) => (props.isNative ? "300px" : "250px")};
    width: ${(props) => (props.isNative ? "80%" : "100%")};
    margin-top: ${(props) => (props.isNative ? "0" : "5px")};
  }

 @media (max-width: 768px) and (min-width: 320px) {
  width: 100%;
}
`;

const Image = styled(motion.img)`
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const ScrollArrow = styled.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 105;
  pointer-events: none;
  opacity: 0.8;
  width: 15px;
  height: 15px;
  border-right: 2px solid ${props => props.color || 'var(--dark)'};
  border-bottom: 2px solid ${props => props.color || 'var(--dark)'};
  transform: rotate(45deg);
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: rotate(45deg) translate(-3px, -3px);
    }
    50% {
      transform: rotate(45deg) translate(0, 0);
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

