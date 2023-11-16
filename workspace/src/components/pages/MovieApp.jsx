import React from 'react'
import styled, { keyframes } from "styled-components";
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NextProject from '../NextProject';
import { useTransitionContext } from '../../context/TransitionContext';
import TransitionScreen from '../TransitionScreen';

function MovieApp() {
  const { runTransition } = useTransitionContext();
  return (
    <>
    <Body>
      <Content>
        <InfoSection>
          {/* <Header> */}
          <PageTitle>Movie Night</PageTitle>
          {/* </Header> */}
          <Info>
            <PageDescription style={{ display: 'flex', flexDirection: 'column', font: '55vw', margin: '0' }}>
              Movie Night seamlessly integrates with the OMDb API, allowing users to access a wealth of information about a diverse range of movies. From classic films to the latest releases, users can explore details such as title, release date, genre, cast, runtime, ratings, and more.
              <br />
              <br />
              Thanks to the use of both React and React Native, the app is accessible across multiple platforms. Users can enjoy a consistent and responsive experience whether they are using the web version (built with React) or the mobile app (built with React Native) on their smartphones and tablets.
            </PageDescription>
            <LinkGroup>
              <NextProject />

              <Github>
                {window.innerWidth <= 768
                  ? null
                  : <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5vw', marginRight: '5px', color: 'var(--redish)' }} />
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
            </LinkGroup>
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
        <NextProject />
      </Content>
    </Body>
    {
      runTransition === true
      ? <TransitionScreen />
      : ""
    }
    </>
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
  position: relative;
  display: flex;
  flex-direction: column;
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
    justify-content: flex-start;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 30px 0;
  gap: 5vh; 
  animation: ${fadein} 0.8s forwards;
  /* border: 1px solid blue; */

  @media (max-width: 1440px) {
    /* align-items: flex-start; */
  }

  @media (max-width: 1024px) {
    width: 85%;
    padding-top: 50px;
    margin: 0 10px 0 0;
    gap: 20px;
  }

  @media (max-width: 768px) {
    /* align-items: center; */
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
// const Header = styled.div`
// display: flex;
// /* justify-content: center; */
// border: 1px solid red;

// @media (max-width: 1024px) {
//     width: 95%;
//   }
// `

const Info = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 5vw;
  font-size: 1.1em;
  font-weight: 600;
  /* border: 1px solid green; */

  @media (max-width: 1440px) {
    font-size: 1vw;
    width: 100%;

  }
  @media (max-width: 1024px) {
    width: 95%;
    padding-top: 3vh;
  }

  @media (max-width: 768px) {
    font-size: 1.7vw;
}

@media (max-width: 425px) {
  font-size: 2.9vw;
  flex-direction: column;
  align-items: flex-start;
}
`

const PageTitle = styled.h1`
font-size: 5vw;
width: 80%;
align-self: flex-start;
animation: ${glow} 2s infinite alternate; 
color: var(--redish);

@media (max-width: 1024px) {
  margin: 1.5vh 0;
}

@media (max-width: 965px) {
    font-size: 2.5vw;
  }

@media (max-width: 768px) {
  font-size: 1.8em;
  }

@media (max-width: 425px) {
  font-size: 1.8em;
}
`
const PageDescription = styled.h3`
  font-family: Roboto Flex;
  font-weight: 500;
  width: 55vw;
  color: var(--redish);
  align-self: flex-start;
  font-size: 1.2vw; 

  @media (max-width: 768px) {
    font-size: 1.1em;
    width: 50vw;
  }

  @media (max-width: 425px) {
    font-size: 1.1em;
    width: 100%;
  }
  `
const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  /* border: 1px solid red; */

  @media (max-width: 768px) {
    /* flex-direction: row; */
  }

  @media (max-width: 425px) {
   width: 100%;
   /* align-items: flex-end; */
   flex-direction: row-reverse;
   align-items: center;
   justify-content: center;
  }  
`

const Github = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh 0;
  width: 9vw;
  border-radius: 15px;
  border: 4px dotted var(--redish);

  @media (max-width: 1440px) {
    font-size: 1vw;
    width: 10vw;
  }
  @media (max-width: 1024px) {
    font-size: 1vw;
    /* width: 15vw; */
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

@media (max-width: 425px) {
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
  /* border: 1px solid orange; */

  @media (max-width: 1024px) {
    align-items: center;

  }
  @media (max-width: 425px) {
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
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
  font-size: 1vw;
  text-decoration: underline;
  color: var(--redish);
  border-radius: 10px;
  overflow: hidden;
  /* border: 1px solid purple; */


  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    border: 1px dotted var(--redish);
    font-size: 1.3vw;
    width: 12vw;
    padding: 1vw;

    &:active {
      background-color: var(--reddish);
      color: var(--darker);
    }

    @media (max-width: 425px) {
      font-size: 2vw;
      width: 17vw;
      padding: 2vw;
      margin-left: 2vw;
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