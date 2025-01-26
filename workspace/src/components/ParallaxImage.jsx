import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import styled from 'styled-components';

const ParallaxImage = ({ images = [], scrollYProgress,  }) => {
  const [hookedYPosition, setHookedYPosition] = useState(0);

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  

  return (
    <CardContainer >
      <Card>
        <Image
          style={{
            opacity
          }}
          src={images[0]?.src}
          alt="Parallax"
        />
      </Card>
    </CardContainer>
  );
};

// ParallaxImage.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       src: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default ParallaxImage;

const CardContainer = styled(motion.div)`
  height: 100vh;  
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
  border: 3px solid red;
  margin-top: 150vh;
  `;

const Card = styled(motion.div)`
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  border: 6px solid green;
`;

const Image = styled(motion.img)`
  width: 800px;
  height: 400px;
  object-fit: cover;
`;
