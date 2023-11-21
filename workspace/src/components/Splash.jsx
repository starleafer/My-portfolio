import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion as m } from 'framer-motion'

function Splash() {
  const [showComponents, setShowComponents] = useState(true);

  const [stripeColors, setStripeColors] = useState([
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
    '--dark',
  ]);

  const colorSequencesRef = useRef(
    Array.from({ length: 17 }, () =>
      ['--greenish', '--yellowish', '--ocean', '--redish', '--blueish', '--neon-green', '--light-purple', '--test', '--more-red']
        .sort(() => Math.random() - 0.5)
    )
  );

  useEffect(() => {
    const changeBackgroundColor = () => {
      setStripeColors((prevColors) =>
        prevColors.map((_, index) => {
          const colorSequence = colorSequencesRef.current[index];
          if (colorSequence.length > 0) {
            return colorSequence.shift();
          } else {
            colorSequencesRef.current[index] = ['--greenish', '--yellowish', '--ocean', '--redish', '--blueish', '--neon-green', '--light-purple', '--test']
              .sort(() => Math.random() - 0.5);
            return colorSequencesRef.current[index].shift();
          }
        })
      );
    };

    const intervalId = setInterval(changeBackgroundColor, 200);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowComponents(false), 1800);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Body
  // initial={{ opacity: 0, scale: 0.5 }}
  // animate={{
  //   opacity: 1,
  //   scale: 1,
  //   transition: {
  //     duration: 0.8,
  //     delay: 0.2,
  //     ease: [0.5, 0.71, 0.2, 1.01],
  //   },
  // }}
>
      {showComponents ? (
        <>
          <Front>ES</Front>
          <Middle>
            <Plate />
            {stripeColors.map((stripeColor, index) => (
              <StripeContainer key={index}>
                <Stripe className="Stripe" color={stripeColor} />
              </StripeContainer>
            ))}
          </Middle>
        </>
      ) : (
        <ES>ES</ES>
        )}
    </Body>
  );
}



const slide = keyframes`
  0% {
    left: -50%;
  }
  25% {
    left: -25%;
  }
  50% {
    left: 0%;
  }
  75% {
    left: 25%;
  }
  100% {
    left: 50%;
  }
`;

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeout = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Body = styled(m.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
  height: 90vh; 
  overflow: hidden; 
`;

const Front = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  font-size: 20vw;
  font-weight: 500;
  text-align: center;
  background-color: white; 
  z-index: 2;
  width: 100%; 
  height: 100%; 
  mix-blend-mode: screen; 
  border: 3px solid var(--dark);


  @media (max-width: 425px) {
    font-size: 30vw;
  }
`;

const ES = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20vw;
  font-weight: 500;
  text-align: center;
  color: var(--dark);
  padding: 0 1vw;
  z-index: 999;
  border: 3px solid var(--dark);
  border-radius: 15px;
  animation: ${fade} 200ms ease-in;  

  @media (max-width: 425px) {
    font-size: 30vw;
  }
`;

const Middle = styled.div`
  display: flex;
  width: 70%;
  border: 1px solid green;
  padding-left: 30vw;
`;

const StripeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  height: 26em;
  animation: ${slide} 1500ms linear forwards;
  
`;

const Stripe = styled.div`
  width: 2.5vw;
  height: 26em;
  background-color: ${(props) => `var(${props.color})`};
  
`;

const Plate = styled.div`
    width: 100%;
    height: 26em;
    position: absolute;
    background-color: #fff;
`;

export default Splash;


