import React, { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Cleaning() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <Body>
      <Content>
        <InfoContainer>
          <Info>
            <h1 style={{ fontSize: '40px' }}>DustBusters</h1>
            <h2 style={{ fontFamily: 'Roboto Flex', fontWeight: '500', fontSize: '25px'}}>Provides all types of cleaning services that you may or may not need! All functional booking, log in and review capabilities.</h2>
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
              To the page
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '18px' }} />
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
                To the code
                <FontAwesomeIcon icon={faGithub} style={{ marginRight: '5px' }} />
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
  align-items: flex-end;
  width: 70vw;
  gap: 10vw;
  `

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: flex-start;
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
  font-family: 'Roboto Flex';
  gap: 5px;
  font-size: 1.5em;
  color: var(--dark);
  background-color: var(--yellowish);
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    color: #fff;
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

export default Cleaning