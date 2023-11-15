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
        <InfoSection>
          <PageTitle>Movie Night</PageTitle>
          <Info>
            <PageDescription style={{ display: 'flex', flexDirection: 'column', font: '55vw', margin: '0' }}>
              Movie Night seamlessly integrates with the OMDb API, allowing users to access a wealth of information about a diverse range of movies. From classic films to the latest releases, users can explore details such as title, release date, genre, cast, runtime, ratings, and more.
              <br />
              <br />
              Thanks to the use of both React and React Native, the app is accessible across multiple platforms. Users can enjoy a consistent and responsive experience whether they are using the web version (built with React) or the mobile app (built with React Native) on their smartphones and tablets.
            </PageDescription>
            <Github>
              {window.innerWidth <= 768
                ? null
                : <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2vw', marginRight: '5px', color: 'var(--redish)' }} />
              }
              <LinkContainer>
                <Link
                  to="https://github.com/starleafer/https---github.com-starleafer-Movie-App-Native"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={() => setHoveredLink(2)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <InfoLinks>
                    {window.innerWidth <= 768 && (
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="icon"
                        style={{ marginRight: '5px', color: 'var(--redish)' }}
                      />
                    )}
                    Native code
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
                    {window.innerWidth <= 768 && (
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="icon"
                        style={{ marginRight: '5px', color: 'var(--redish)' }}
                      />
                    )}
                    Browser code
                  </InfoLinks>
                </Link>
              </LinkContainer>
            </Github>
          </Info>
        </InfoSection>
        <Native>
          <NativeHeader>React Native</NativeHeader>
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
          <BrowserHeader>React</BrowserHeader>
          <ImageContainer style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
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
  /* border: 1px solid red; */

  @media (max-width: 1024px) {
    gap: 5vh; 
    margin: 0 200px 0 0;  
  }

  @media (max-width: 768px) {
    margin: 50px 0 0 0;
    padding: 0;
    justify-content: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  gap: 5vh; 
  animation: ${fadein} 0.8s forwards;
  /* border: 1px solid blue; */

  @media (max-width: 1440px) {
    align-items: flex-start;
  }

  @media (max-width: 1024px) {
    width: 85%;
    align-items: flex-start;
    padding-top: 50px;
    margin: 0 10px 0 0;
    gap: 20px;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
  `

const InfoSection = styled.div`
  width: 85%;
  min-width: 60%;
  /* border: 1px solid orange; */
  
  @media (max-width: 1440px) {
    width: 85%;
    margin-right: 5vw; 
  }
  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
  align-items: center;
  width: 100%;
  margin: 0;
}


  `

const Info = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  gap: 5vw;
  font-size: 1.1em;
  font-weight: 600;
  /* border: 1px solid white; */

  @media (max-width: 1440px) {
    font-size: 1vw;
    width: 90%;

  }
  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    font-size: 1.7vw;
    /* flex-direction: column; */
}

@media (max-width: 375px) {
  font-size: 2.9vw;
  flex-direction: column;
  align-items: flex-start;
}
`


const PageTitle = styled.h1`
font-size: 5vw;
align-self: flex-start;
animation: ${glow} 2s infinite alternate; 
color: var(--redish);


@media (max-width: 1024px) {
  /* font-size: 2rem; */
  margin: 1.5vh 0;
}

@media (max-width: 965px) {
    font-size: 2.5vw;
  }

@media (max-width: 768px) {
     font-size: 3.5vw;
  }

@media (max-width: 375px) {
  font-size: 1.6em;
}
`
const PageDescription = styled.h3`
  font-family: Roboto Flex;
  font-weight: 500;
  width: 55vw;
  color: var(--redish);
  /* font-size: 1.2em; Use a relative unit */

  @media (max-width: 768px) {
    font-size: 1.1em;
    width: 50vw;
  }

  @media (max-width: 375px) {
    font-size: 1.1em;
    width: 100%;
  }
 
  `

const Github = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw;
  width: 10vw;
  border-radius: 15px;
  border: 4px dotted var(--redish);

  @media (max-width: 1440px) {
    font-size: 1vw;
    width: 10vw;
  }
  @media (max-width: 1024px) {
    font-size: 1vw;
    width: 15vw;
  }
  @media (max-width: 965px) {
    font-size: 0.8vw;
    width: 10vw;
    border: 2px dotted var(--redish);
  }

  @media (max-width: 768px) {
    width: 20vw;
    border: none; 
}

@media (max-width: 375px) {
  width: 100%;
  /* justify-content: space-between; */
}


`
const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  /* border: 1px solid purple; */
  
  @media (max-width: 375px) {
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
}
  `

const InfoLinks = styled.div`
  display: flex;
  position: relative; 
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Flex';
  margin: 10px 0;
  font-size: 1.3em;
  color: var(--redish);
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    border: 1px solid var(--redish);
    font-size: 2em;
    width: 12vw;
    padding: 1vw;

    &:active {
      background-color: var(--reddish);
      color: var(--darker);
    }

    @media (max-width: 375px) {
      font-size: 2.9vw;
      width: 23vw;
      padding: 2vw;

      /* flex-direction: row; */
    }
  }
`
const NativeHeader = styled.h3`
  width: 100%;
  font-weight: 700;
  color: var(--redish);
  @media (max-width: 768px) {
    width: 100%;
    font-size: 2vw;
}

`
const Native = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* align-self: flex-start; */
  /* border: 1px  solid green; */

@media (max-width: 1440px) {
  align-items: flex-start;
}

@media (max-width: 768px) {
  width: 100%;
  align-items: center;
}
`

const ImageContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10vh;
  gap: 2vw; 
  width: 85%; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 columns */
  grid-template-rows: repeat(2, 1fr);     /* 2 rows */
  gap: 2vw; 


  min-width: 50%;
  margin: 0;
  /* border: 1px solid cyan; */

  @media (max-width: 1440px) {
  justify-content: flex-start;
}

@media (max-width: 768px) {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(2, 1fr);    
  gap: 2vw; 
  }

  @media (max-width: 375px) {
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr); 
  }
`


const MobileImage = styled.img`
  width: 100%;
  border-radius: 10px;
`

const BrowserHeader = styled.h3`
    width: 100%;
    font-weight: 700;
    color: var(--redish);
    @media (max-width: 768px) {
      width: 100%;
      font-size: 2vw;
  }
`

const Browser = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4vh;
  /* border: 1px solid green; */

  @media (max-width: 1440px) {
  align-items: flex-start;
  /* width: 85%; */
}

@media (max-width: 768px) {
  align-items: center;
  width: 100%;

}
`

const BrowserImage = styled.img`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #201c1cab;
`;

export default MovieApp