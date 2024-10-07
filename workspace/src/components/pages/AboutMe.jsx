import React from "react";
import Buttons from "../Buttons";
import styled, { keyframes } from "styled-components";
import { motion as m } from "framer-motion";
import ProfilePic from "../../assets/ProfilePic.jpg";

function AboutMe() {
  return (
    <Body>
      <Content>
        <Text>
        <h2>About me</h2>
          Hi there! I'm Emil Stjernlöf, a dedicated Frontend Developer based
          in Stockholm, Sweden. Currently pursuing my education at Jensen
          Yrkeshögskola in Kista, I am deeply passionate about creating
          seamless user experiences.
          <br />
          <br />
          Proficient in JavaScript and specialized in React, I thrive on the
          challenge of crafting dynamic and interactive web applications. With
          a keen eye for design and functionality, I believe in the power of
          technology to enhance the way we interact with the digital world.
          <br />
          <br />
          My journey as a developer has exposed me to a diverse range of
          projects, allowing me to adapt swiftly to new technologies and
          frameworks. I am a strong advocate for collaboration and effective
          communication, valuing the insights and contributions of fellow
          developers and stakeholders alike.
          <br />
          <br />
          Outside of coding, I find inspiration in exploring emerging
          technologies and trends in the ever-evolving field of frontend
          development. I am excited to continue pushing boundaries and
          creating compelling digital experiences that leave a lasting
          impression.
        </Text>
        <Image src={ProfilePic} alt="profile picture"></Image>
      </Content>
      {/* <ImageContainer> */}
      {/* <ImageFrame></ImageFrame> */}
      {/* </ImageContainer> */}
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


const Body = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark );
  /* justify-content: center; */
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

// const ImageContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   width: 40vw;
//   border: 1px solid black;
// `;

const Image = styled.img`
  position: relative;
  height: 55vh;
  min-width: 35vh;
  background-color: #fff;
  border-radius: 15px;
  filter: grayscale(100%);
  z-index: 1;
`;

const ImageFrame = styled.div`
  position: absolute;
  height: 55vh;
  top: 25vh;
  left: 13vw;
  min-width: 35vh;
  border: 1px solid white;
  border-radius: 15px;
`;

export default AboutMe;
