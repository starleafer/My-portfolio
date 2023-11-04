import React from "react";
import Buttons from "../Buttons";
import styled from "styled-components";
import { motion as m } from 'framer-motion'


function AboutMe() {
  return (
    <Body>
      <Light>
        <h2>About me</h2>
      </Light>
      <Dark
         initial={{ x: '100%' }}
         animate={{ x: '0%' }}
         transition={{ duration: 0.75, ease: [0.5, 0, 0.5, 1] }}
         exit={{ opacity: 1 }}
      >
        <h2>Image</h2>
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
  height: 100vh;
  width: 60vw;
  justify-content: center;
  /* border: 1px solid black; */
`;

const Dark = styled(m.div)`
  display: flex;
  height: 100vh;
  width: 40vw;
  color: #fff;
  justify-content: center;
  background-color: var(--dark);
`;

export default AboutMe;
