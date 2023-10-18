import React, { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import { motion as m } from 'framer-motion';

function Cleaning() {

  return (
    <Body>
      <Content>
        <InfoContainer>
          <Info>
            <h1>DustBusters</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic ratione tempora ipsum libero ipsam optio vero cupiditate ullam natus repellat fugiat dignissimos, distinctio quo! Voluptatum ipsam veritatis laboriosam aspernatur.</p>
          </Info>
          <Info>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, suscipit! Accusamus eum est atque dolor, vel harum provident? Sint quibusdam tempora rerum! Id, voluptatibus illum.</Info>
          <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nihil, possimus non ad consequuntur quo, qui animi necessitatibus nostrum iste accusantium fuga doloremque placeat dignissimos provident tempora porro tempore deleniti quisquam labore ducimus. Nulla, nesciunt?</Info>
        </InfoContainer>
        <ImageContainer>
        </ImageContainer>
      </Content>
    </Body>
  )
}

const fadein = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const Body = styled(m.div)`
  background-color: var(--yellowish);
`

const Content = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  animation: ${fadein} 0.8s forwards;
`

const InfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px black solid;
  height: 80vh;
  width: 30vw;
`
const Info = styled.section`
  border: 1px solid white;
  height: 18vh;
  margin-top: 50px;
  width: 80%;
  font-size: 21px;
  font-weight: 700;
`

const ImageContainer = styled.div`
  display: flex;
  border: 1px black solid;
  height: 80vh;
  width: 45vw;
`
// const Container = styled.div`
//   width: 70vw;
//   height: 80vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 2px solid var(--dark);
//   color: var(--dark);
//   border-radius: 15px;
// `

export default Cleaning