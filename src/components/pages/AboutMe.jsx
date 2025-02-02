import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useCardContext } from "../../context/CardContext";
import CustomButton from "../CustomButton";
import Lenis from "lenis";

function AboutMe() {
  const { main } = useCardContext();
  const bodyRef = useRef(null);
  const contentRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [isContactActive, setIsContactActive] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia(
      "(max-width: 768px) and (min-width: 320px)"
    ).matches;

    if (isMobile) {
      const lenis = new Lenis({
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
    }
  }, []);

  const handleButtonClick = (repo, index) => {
    if (Object.keys(repo)[0] === "email") {
      setCopySuccessMessage("Email copied!");
      navigator.clipboard.writeText(repo.email);
    }
  };

  return (
    <Body ref={bodyRef}>
      <Content ref={contentRef}>
        <Text>
          <h2>{main.title}</h2>

          <CascadingText delay="0.2s">
            <p>{main.descriptions.primary}</p>
          </CascadingText>

          <CascadingText delay="0.3s">
            <p>{main.descriptions.secondary}</p>
          </CascadingText>

          <CascadingText delay="0.4s">
            <p>{main.descriptions.tertiary}</p>
          </CascadingText>

          <CascadingText delay="0.5s">
            <p>{main.descriptions.quaternary}</p>
          </CascadingText>
        </Text>
        <Image src={main.images.profilePic} alt="profile picture" />
      </Content>
      <ContactLinksContainer>
        {main.repos.map((repo, index) => (
          <ButtonWrapper key={index}>
            <CustomButton
              color={main.color}
              backgroundColor={main.backgroundColor}
              onClick={() => handleButtonClick(repo, index)}
              label={<IconWrapper>{repo.icon}</IconWrapper>}
              showCopyAlert={
                Object.keys(repo)[0] === "email" && copySuccessMessage
              }
              copyMessage={copySuccessMessage}
              small
            />
          </ButtonWrapper>
        ))}
      </ContactLinksContainer>
    </Body>
  );
}

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInAnimation = keyframes`
  from {
    transform: translateY(5%);
  }
  to {
    transform: translateY(0);
  }
`;

const cascadingFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Body = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark);
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) and (min-width: 320px) {
    height: auto;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    padding: 2vh 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  color: white;
  animation: ${fadeInAnimation} 2s, ${slideInAnimation} 1s;
  margin-bottom: 5vh;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 90%;
    flex-direction: column;
    gap: 2em;
    margin: 4vh 0;
    height: auto;
  }
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  font-family: "Lato", sans-serif;
  margin-right: 6vw;
  max-height: 500px;
  max-width: 500px;

  @media (max-width: 768px) and (min-width: 320px) {
    margin-right: 0;
    margin-bottom: 4vh;
    max-width: 100%;
  }
`;

const CascadingText = styled.div`
  margin: 1em 0;
  font-size: clamp(1rem, calc(0.1vw + 1rem), 13rem);

  p {
    opacity: 0;
    animation: ${cascadingFadeIn} 1s forwards;
    animation-delay: ${(props) => props.delay || "0s"};
    margin: 0;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    max-height: 70%;
  }
`;

const Image = styled.img`
  position: relative;
  height: auto;
  width: 100%;
  max-width: 20em;
  margin-top: 2em;
  background-color: #fff;
  border-radius: 5%;
  filter: grayscale(100%);
  z-index: 1;

  @media (max-width: 768px) and (min-width: 320px) {
    max-width: 70%;
    border-radius: 10%;
    margin: 2em 0;
  }
`;

const ContactLinksContainer = styled.div`
  display: flex;
  width: 60%;
  height: 5rem;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  margin-top: 2em;
  opacity: 0;
  animation: ${fadeInAnimation} 2s forwards, ${slideInAnimation} 1s forwards;
  animation-delay: 0.7s;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 90%;
    justify-content: center;
    margin: 2em 0;
    padding-bottom: 4em;
  }
`;

const ButtonWrapper = styled.div`
  width: 5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 4rem;
    height: 2rem;
  }
`;

const IconWrapper = styled.div`
  transform: translateZ(0);
  will-change: transform;

  svg {
    width: 2em;
    height: 2em;

    @media (max-width: 768px) and (min-width: 320px) {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;

export default AboutMe;
