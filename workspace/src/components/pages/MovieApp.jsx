import React from 'react'
import styled, { keyframes } from "styled-components";
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function MovieApp() {
  return (
    <Body>
      <Content>
        <div style={{ width: '85%'}}>
          <PageTitle>Movie Night</PageTitle>
          <Info>
            <PageDescription style={{ display: 'flex', flexDirection: 'column', width: '55vw', margin: '0'}}>
              Movie Night seamlessly integrates with the OMDb API, allowing users to access a wealth of information about a diverse range of movies. From classic films to the latest releases, users can explore details such as title, release date, genre, cast, runtime, ratings, and more.
              <br />
              <br />
              Thanks to the use of both React and React Native, the app is accessible across multiple platforms. Users can enjoy a consistent and responsive experience whether they are using the web version (built with React) or the mobile app (built with React Native) on their smartphones and tablets.
            </PageDescription>
              <Github>
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2rem', marginRight: '5px', color: 'var(--redish)'}} />
                <LinkContainer>
                <Link
                  to="https://github.com/starleafer/https---github.com-starleafer-Movie-App-Native"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={() => setHoveredLink(2)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <InfoLinks>
                    Native code
                    {/* <FontAwesomeIcon icon={faGithub} style={{ marginRight: '5px' }} /> */}
                  </InfoLinks>
                </Link>
                <Link
                  to="https://github.com/starleafer/The-movie-app"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={() => setHoveredLink(2)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <InfoLinks>
                    Browser code
                  </InfoLinks>
                </Link>
                </LinkContainer>
              </Github>
          </Info>
        </div>
        <Native>
          <PageDescription style={{ width: '85%', fontWeight: '700' }}>React Native</PageDescription>
          <ImageContainer>
            <MobileImage src='movieapp/login.jpg' />
            <MobileImage src='movieapp/movielist.jpg' />
            <MobileImage src='movieapp/movieinfo.jpg' />
            <MobileImage src='movieapp/search.jpg' />
            <MobileImage src='movieapp/drawer.jpg' />
            <MobileImage src='movieapp/mypage.jpg' />
          </ImageContainer>
        </Native>
        <Browser>
          <PageDescription style={{ width: '85%', fontWeight: '700' }}>React</PageDescription>
          <ImageContainer style={{ flexDirection: 'column', marginBottom: '5vh'}}>
          <BrowserImage src='movieapp/browserSearch.png' alt='browser search' />
          <BrowserImage src='movieapp/browserPager.png' alt='browser search' />
          <BrowserImage src='movieapp/browserSerier.png' alt='browser search' />
          </ImageContainer>
        </Browser> 
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

const glow = keyframes`
  from {
    text-shadow: 0 0 2px var(--redish), 0 0 4px var(--redish), 0 0 6px var(--redish);
  }
  to {
    text-shadow: 0 0 8px var(--redish), 0 0 10px var(--redish), 0 0 12px var(--redish);
  }
`;


const Body = styled(m.div)`
  display: flex;
  width: 100%;
  background-color: var(--darker);
  overflow-y: auto; 
  padding: 0 200px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
  gap: 70px;
  animation: ${fadein} 0.8s forwards;

  @media (max-width: 768px) {
      margin-left: 0;
      gap: 20px;
  }
`

const Info = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  font-size: 1.1em;
  font-weight: 600;
`

const PageTitle = styled.h1`
font-size: 3.6rem;
align-self: flex-start;
animation: ${glow} 2s infinite alternate; 
color: var(--redish);


@media (max-width: 768px) {
  font-size: 1.6rem;
  margin: 25px 0 0 0 ;
}
`
const PageDescription = styled.h3`
  font-family: Roboto Flex;
  font-weight: 500;
  width: 65vw;
  color: var(--redish);
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  `

const Github = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  border: 4px dotted var(--redish);
`
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  `

const InfoLinks = styled.div`
  display: flex;
  position: relative; 
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Flex';
  margin: 10px 0;
  font-size: 1.1em;
  color: var(--redish);
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    color: #fff;
  }
  
`
const Native = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`

const ImageContainer = styled.div`
  display: flex;
  margin-bottom: 10vh;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 85%;
  margin: 0;
`
const MobileImage = styled.img`
  width: 15.2%;
  border-radius: 10px;
`

const Browser = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
const BrowserImage = styled.img`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #201c1cab;
`;

export default MovieApp