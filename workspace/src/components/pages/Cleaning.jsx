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
            <PageTitle>DustBusters</PageTitle>
            <PageDescription>Provides all types of cleaning services that you may or may not need! All functional booking, log in and review capabilities.</PageDescription>
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
                <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
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

// const slide = keyframes`
//     0% {
//       left: 0vw;
//     }
//     100% {
//       left: 11vw;
//     }
//   `;

const Body = styled(m.div)`
  width: 100%;
  background-color: var(--yellowish);
  overflow-y: auto; 
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  margin-left: 50px;
  margin-top: 100px;
  animation: ${fadein} 0.8s forwards;

  @media (max-width: 768px) {
      margin-left: 0;
      gap: 20px;

  }
`

const InfoContainer = styled.article`
  display: flex;
  align-items: flex-end;
  width: 70vw;
  gap: 10vw;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;

  }
  `

const Info = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  font-size: 1.3em;
  font-weight: 600;

`

const PageTitle = styled.h1`
font-size: 3.6rem;

@media (max-width: 768px) {
    font-size: 1.6rem;
    margin: 25px 0 0 0 ;
  }
`

const PageDescription = styled.h2`
  font-family: Roboto Flex;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: flex-start;
  width: 100%;
  gap: 1vw;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 70vw;
    font-size: 0.4rem;
    margin-top: 1rem;
    /* justify-content: space-evenly; */
    align-items: center;

    :last-child {

    @media (max-width: 768px) {
      margin: 0;
      margin-left: auto;
  }
  }
}

@media (max-width: 375px) {  
    
}
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