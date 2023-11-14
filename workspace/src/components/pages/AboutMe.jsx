import React from "react";
import Buttons from "../Buttons";
import styled from "styled-components";
import { motion as m } from "framer-motion";

function AboutMe() {
  return (
    <Body>
      <Light>
        <Content>
          <h2>About me</h2>
          <Text>
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
        </Content>
      </Light>
      <Dark
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.75, ease: [0.4, 0.3, 0.2, 1] }}
        exit={{ opacity: 1 }}
      >
        <Image src="profilepic.jpg" alt="profile picture"></Image>
        <ImageFrame></ImageFrame>
      </Dark>
    </Body>
  );
}


const Body = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Light = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 60vw;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  /* border: 1px solid black; */
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  font-family: Roboto Flex;
`;

const Dark = styled(m.div)`
  display: flex;
  height: 100vh;
  width: 40vw;
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
`;

const Image = styled.img`
  position: relative;
  height: 55vh;
  min-width: 40vh;
  border-radius: 15px;
  background-color: #fff;
  filter: grayscale(40%);
  z-index: 1;
`;
const ImageFrame = styled.div`
  position: absolute;
  height: 55vh;
  top: 25vh;
  left: 12vw;
  min-width: 40vh;
  border: 1px solid white;
  border-radius: 15px;
`;

export default AboutMe;
