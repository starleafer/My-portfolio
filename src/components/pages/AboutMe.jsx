import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useCardContext } from "../../context/CardContext";
import CustomButton from "../CustomButton";
import Lenis from "lenis";

function AboutMe() {
  const { main } = useCardContext();
  const bodyRef = useRef(null);
  const contentRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === Object.keys(main.images).length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [main.images]);

  const handleButtonClick = (repo) => {
    if (Object.keys(repo)[0] === "email") {
      setCopySuccessMessage("Email copied!");
      navigator.clipboard.writeText("emil.stjernlof@gmail.com");

      setTimeout(() => {
        setCopySuccessMessage("");
      }, 3000);
    } else if (Object.keys(repo)[0] === "browser") {
      window.open(repo.browser, "_blank");
    } else if (Object.keys(repo)[0] === "linkedin") {
      window.open(repo.linkedin, "_blank");
    }
  };

  const handleMusicClick = (song) => {
    if (song.song) {
      window.open(song.song, "_blank");
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
        <ImageAndLinksContainer>
          <CardContainer>
            <ImageContainer>
              {Object.values(main.images).map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`profile picture ${index + 1}`}
                  active={index === currentImageIndex}
                />
              ))}
            </ImageContainer>
            <MusicWrapper>
              <MusicHeaderWrapper>
                <MusicHeader>What's in my headphones?</MusicHeader>
              </MusicHeaderWrapper>
              {main.music.map((song, index) => (
                <SongWrapper key={index}>
                  <CustomButtonContainer>
                    <CustomButton
                      key={index}
                      color={main.color}
                      backgroundColor={main.backgroundColor}
                      onClick={() => handleMusicClick(song)}
                      width="100%"
                      height="100%"
                      border
                      label={
                        <IconWrapper>
                          {main.musicIcon}
                          <SongTitleContainer>
                            <SongTitle
                              shouldScroll={song.songtitle.length > 10}
                              duration={`${song.songtitle.length * 0.6}s`}
                            >
                              {song.songtitle}{" "}
                            </SongTitle>
                          </SongTitleContainer>
                        </IconWrapper>
                      }
                    />
                  </CustomButtonContainer>
                </SongWrapper>
              ))}
            </MusicWrapper>
          </CardContainer>
          <ContactLinksContainer>
            {main.repos.map((repo, index) => (
              <ButtonWrapper key={index}>
                <CustomButton
                  color={main.color}
                  backgroundColor={main.backgroundColor}
                  onClick={() => handleButtonClick(repo)}
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
        </ImageAndLinksContainer>
      </Content>
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

const scrollText = keyframes`
  0%, 10% { transform: translateX(0); } 
  45%, 55% { transform: translateX(-50%); }
  90%, 100% { transform: translateX(0); }
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
  margin: 5vh;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 90%;
    flex-direction: column;
    gap: 100px;
    margin: 10vh 0 4vh 0;
    height: auto;
  }
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  font-family: "Lato", sans-serif;
  margin-right: 6vw;
  max-height: 600px;
  max-width: 500px;
  min-width: 320px;

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

const ImageAndLinksContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 20em;
  margin-top: 12vh;

  @media (max-width: 768px) and (min-width: 320px) {
    max-width: 100%;
    align-items: center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 3em;
  padding: 1em;

  @media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    gap: 2em;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 320px;
  height: 25em;
  overflow: hidden;
  border-radius: 5%;

  @media (max-width: 1536px) {
    height: 22em;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    max-width: 320px;
    height: 25em;
    margin: 0;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 768px) and (min-width: 320px) {
    position: absolute;
    border-radius: 5%;
  }
`;

const MusicWrapper = styled.div`
  width: 280px;
  border-radius: 15px;
  padding: 2em 0;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 320px;
  }
`;

const MusicHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
`;

const MusicHeader = styled.h4`
  font-family: "Lato", sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  padding: 0 0 0.5em 0;
  width: 80%;
`;

const SongWrapper = styled.div`
  margin: 1.5em auto;
  width: calc(100% - 2em);
  overflow: visible;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    margin: 1em auto;
    width: 90%;
    height: 35px;
  }
`;

const CustomButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const SongTitleContainer = styled.div`
  overflow: hidden;
  width: 150px;
  position: relative;
  margin-left: 0.5em;
  height: 1.2em;
  display: flex;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    margin: 0 0 0 0.5em;
    width: 120px;
  }
`;

const SongTitle = styled.div`
  display: inline-block;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.2em;
  font-family: "Lato", sans-serif;
  ${(props) =>
    props.shouldScroll &&
    css`
      animation: ${scrollText} ${(props) => props.duration || "5s"} linear
        infinite;
      padding-right: 2em;
    `}

  &:hover {
    animation-play-state: paused;
  }
`;

const ContactLinksContainer = styled.div`
  display: flex;
  height: 5rem;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  margin-top: 2em;
  opacity: 0;
  animation: ${fadeInAnimation} 2s forwards, ${slideInAnimation} 1s forwards;
  animation-delay: 0.7s;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
    justify-content: center;
    margin: 2em 0;
    padding-bottom: 2em;
    gap: 1em;
  }
`;

const ButtonWrapper = styled.div`
  width: 5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 4rem;
    height: 2rem;
  }
  `;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: translateZ(0);
  will-change: transform;
  max-width: 100%;
  
  @media (max-width: 768px) and (min-width: 320px) {
    gap: 1em;
    font-size: 0.9rem;
  }

  svg {
    width: 2em;
    height: 2em;
    flex-shrink: 0;

    @media (max-width: 768px) and (min-width: 320px) {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;

export default AboutMe;
