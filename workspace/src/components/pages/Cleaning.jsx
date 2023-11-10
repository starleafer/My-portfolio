import React, { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Cleaning() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <Body>
      <Content>
        <InfoContainer>
          <Info>
            <h1 style={{ fontSize: '40px' }}>DustBusters</h1>
            <h2>Provides all types of cleaning services that you may or may not need! All functional booking, log in and review capabilities.</h2>
          </Info>
          <Links>
            <Link
              to="https://dustbusters-207c6.web.app/"
              target="_blank"
              style={{ textDecoration: 'none' }}
              onMouseEnter={() => setHoveredLink(1)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <InfoLinks hoveredLink={hoveredLink === 1}>
                {/* <Icon src='db.png' /> */}
                <DB>DB</DB>
                To the page
              </InfoLinks>
            </Link>
            <Link
              to="https://github.com/jonaelghid3y/DustBusters"
              target="_blank"
              style={{ textDecoration: 'none' }}
              onMouseEnter={() => setHoveredLink(2)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <InfoLinks hoveredLink={hoveredLink === 2}>
                <FontAwesomeIcon icon={faGithub} style={{ marginRight: '5px' }} />
                To the code
              </InfoLinks>
            </Link>
          </Links>
        </InfoContainer>
        <ImageContainer>
          <Image src='1.png' alt='bild' />
          <Image src='2.png' alt='bild' />
          <Image src='dbBook.png' alt='bild' />
          <Image src='dbReviews.png' alt='bild' />
          <Image src='dbLogin.png' alt='bild' />
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

const slide = keyframes`
    0% {
      left: 0vw;
    }
    100% {
      left: 11vw;
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
  text-align: left;
  width: 90%;
  font-size: 1.3em;
  font-weight: 600;
`


const InfoLinks = styled.div`
  display: flex;
  position: relative; 
  align-items: center;
  justify-content: center;
  padding: 1vh;
  min-width: 8vw;
  font-size: 1.5em;
  font-weight: 600;
  color: var(--dark);
  background-color: var(--yellowish);
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    background-color: var(--dark);
    color: var(--yellowish)
  }
  
`

const ImageContainer = styled.div`
  display: flex;
  margin-bottom: 10vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 75vw;
`

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`

const DB = styled.p`
  display: flex;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin: 0 5px 0 0;
  border-radius: 50%;
  border: 1px solid var(--dark)
`

/* const Icon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 5px; 
  border-radius: 50%;
` */

export default Cleaning