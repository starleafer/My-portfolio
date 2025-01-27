import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styled from "styled-components";
import Lenis from "lenis";


export default function ParallaxImage({ images = [] }) {
  const containerRef = useRef(null);

  useEffect(() => {
    console.log('Processing images:', images);
  }, [images]);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: containerRef.current,
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

  if (!images || images.length === 0) {
    return null;
  }

  

  return (
    <Container ref={containerRef}>
      {images.map((image, index) => {
        const itemRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: itemRef,
          container: containerRef,
          offset: ["start end", "end start"],
        });

        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
        const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1, 1]);

        const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
        const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });

        const imageUrl = image.src || image;
        const imageAlt = image.alt || `Image ${index + 1}`;

        return (
          <ImageWrapper
            key={image.id || index}
            ref={itemRef}
            isFirst={index === 0}
            isLast={index === images.length - 1}
          >
            <StyledImage
              src={imageUrl}
              alt={imageAlt}
              style={{
                opacity: smoothOpacity,
                scale: smoothScale,
              }}
              onLoad={() => console.log(`Image loaded successfully:`, imageUrl)}
              onError={(e) => console.error(`Image load error:`, imageUrl, e)}
            />
          </ImageWrapper>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  border: 1px solid red;
`;

const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  margin-top: ${props => props.isFirst ? "20vh" : props.isLast ? "10vh" : "80vh"};
  width: 100%;
  height: 60vh;
  border: 1px solid blue;
`;

const StyledImage = styled(motion.img)`
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
  object-fit: contain;
  border: 1px solid green;
  overflow: hidden;
`;