import React, { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Cleaning() {

  return (
    <Body>
      <Content>
        <InfoContainer>
          <Info>
            <h1 style={{ fontSize: '40px' }}>DustBusters</h1>
            <h2>Provides all types of cleaning services that you may or may not need! All functional booking, log in and review capabilities.</h2>
          </Info>
          <Links>
            <Link to="https://dustbusters-207c6.web.app/" target="_blank" style={{ textDecoration: 'none', color: 'var(--dark)' }}>
              <Info>
                <Icon src='db.png' />
                To the page!
              </Info>
            </Link>
            <Link to="https://github.com/jonaelghid3y/DustBusters" target="_blank" style={{ textDecoration: 'none', color: 'var(--dark)' }}><Info><FontAwesomeIcon icon={faGithub} /> To the code!</Info></Link>
          </Links>
        </InfoContainer>
        <ImageContainer>
          <Image src='1.png' alt='bild' />
          <Image src='2.png' alt='bild' />
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
  /* height: 100%; */
  background-color: var(--yellowish);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  margin-left: 50px;
  animation: ${fadein} 0.8s forwards;

`

const InfoContainer = styled.article`
  display: flex;
  align-items: center;
  /* height: 50vh; */
  width: 70vw;
  gap: 10vw;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25vw;
  gap: 1vw;
`
const Info = styled.section`
  /* margin-top: 4vh; */
  text-align: left;
  width: 90%;
  font-size: 1.3em;
  font-weight: 600;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* border: 1px black solid; */
  /* height: 90vh; */
  width: 75vw;
`

const Image = styled.img`
  width: 100%;
  /* height: 70vh; */
  /* border: 1px solid black; */
`

const Icon = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 50%;
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