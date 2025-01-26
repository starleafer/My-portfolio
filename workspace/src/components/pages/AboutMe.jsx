import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion as m } from "framer-motion";
import ProfilePic from "../../assets/ProfilePic.jpg";
import profilepic1 from "../../assets/profilepic1.jpg";
import github from "../../assets/github.jpg";
import linkedin from "../../assets/linkedin.jpg";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMe() {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [isContactActive, setIsContactActive] = useState(false);
  const email = "emil.stjernlof@gmail.com";

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`Email copied!`);
    setIsContactActive(true);
    setTimeout(() => {
      setIsContactActive(false);
      setCopySuccessMessage("");
    }, 2000);
  }

  return (
    <Body>
      <Content>
        <Text>
          <h2>About me</h2>
          <CascadingText delay="0.2s">
            <p>
              Hi there! I&apos;m Emil Stjernlöf, a dedicated Frontend Developer based
              in Stockholm, Sweden. Currently pursuing my education at Jensen
              Yrkeshögskola in Kista, I am deeply passionate about creating
              seamless user experiences.
            </p>
          </CascadingText>

          <CascadingText delay="0.3s">
            <p>
              Proficient in JavaScript and specialized in React, I thrive on the
              challenge of crafting dynamic and interactive web applications. With
              a keen eye for design and functionality, I believe in the power of
              technology to enhance the way we interact with the digital world.
            </p>
          </CascadingText>

          <CascadingText delay="0.4s">
            <p>
              My journey as a developer has exposed me to a diverse range of
              projects, allowing me to adapt swiftly to new technologies and
              frameworks. I am a strong advocate for collaboration and effective
              communication, valuing the insights and contributions of fellow
              developers and stakeholders alike.
            </p>
          </CascadingText>

          <CascadingText delay="0.5s">
            <p>
              Outside of coding, I find inspiration in exploring emerging
              technologies and trends in the ever-evolving field of frontend
              development. I am excited to continue pushing boundaries and
              creating compelling digital experiences that leave a lasting
              impression.
            </p>
          </CascadingText>
        </Text>
        <Image src={profilepic1} alt="profile picture" />
      </Content>
      <ContactLinksContainer>
        <a href="https://github.com/starleafer">
          <ContactLinks src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/emil-stjernlof/">
          <StyledFontAwesomeIcon icon={faLinkedin} />
        </a>
        <EnvelopeContainer onClick={copyEmail}>
          <EnvelopeIcon icon={faEnvelope} />
          {copySuccessMessage && <CopyAlert className="clicked">{copySuccessMessage}</CopyAlert>}
        </EnvelopeContainer>
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

const slideAndFadeOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  20% {
    transform: translateX(20px);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(20px);
    opacity: 0;
  }
`;

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark);
  overflow: hidden;

  @media (max-width: 768px) {

    padding: 0 10vw; 
  }

`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  color: white;
  animation: ${fadeInAnimation} 2s, ${slideInAnimation} 1s;


    
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  font-family: Roboto Flex;
  margin-right: 6vw;
`;

const CascadingText = styled.div`
  margin: 1em 0;
  
  p {
    opacity: 0;
    animation: ${cascadingFadeIn} 1s forwards;
    animation-delay: ${props => props.delay || '0s'};
    margin: 0;
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

  @media (max-width: 768px) {
    max-width: 15em;
  }

  @media (max-width: 425px) {
    max-width: 10em;
  }
`;

const ContactLinksContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  margin-top: 3em;
  opacity: 0;

 animation: ${fadeInAnimation} 2s forwards, ${slideInAnimation} 1s forwards;
  animation-delay: .7s;
  `;

const ContactLinks = styled.img`
  width: 2.3em;
  height: 2.3em;
  transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.5);
    }
  
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  width: 2.3em;
  height: 2.3em;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
`;

const EnvelopeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

`;

const EnvelopeIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  width: 2.3em;
  height: 2.3em;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
`;

const CopyAlert = styled.div`
  position: absolute;
  left: 3.5em;
  bottom: 0;
  width: 110px;
  height: 40px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1em;
  font-family: 'Roboto Flex';
  border-radius: 10px;
  background-color: var(--darker);
  color: #fff;
  transform: translateX(100%);
  transition: transform 0.3s, color 0.3s , background-color 0.3s ;
  overflow: hidden;

  &.clicked {
    animation: ${slideAndFadeOut} 2s forwards;
    
    @media (max-width: 768px) {
      height: 3.5vh;
      width: 13vw;
      font-size: 2vw;
      padding: 1px;
      transform: translateX(-60%);
      right: 0;
    }
    
    @media (max-width: 375px) {
      width: 21vw;
      font-size: 1em;
      padding: 1px;
      transform: translateX(-80%);
      right: 0;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: #d6d5d5e8;
      right: 500px;
      left: 140%;
      height: 5vw;
      width: 1vw;
      transform: skewX(-30deg);
      opacity: 0; 
      transition: 0.6s 0.2s; 
      opacity: 1; 

      @starting-style {
        left: -22vw;
      }
    }

    &:after {
      width: 1vw;
    }
  }
`;

export default AboutMe;