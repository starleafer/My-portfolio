import React, { useRef, useState } from 'react'
import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useCardContext } from '../context/CardContext';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import PageNavigationButton from './PageNavigationButton';
import ImageGallerySlider from './ImageGallerySlider';
import { SmoothScroll } from './SmoothScroll';

function PageBody({
  title,
  PageDescription1,
  PageDescription2,
  PageDescription3,
  nativeRepo,
  browserRepo,
  website,
  nativeImages,
  browserImages,
  isNative,
  isBrowser,
  showSwitch,
}) {
  const [isSwitchActive, setIsSwitchActive] = useState(false);
  const { card } = useCardContext();

  const links = [nativeRepo, browserRepo, website].filter(link => link);
  const numColumns = links.length;

  const currentPath = window.location.pathname.replace('/', '');
  const currentCard = card.find(item => item.path === currentPath) || card[0];
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;

  const renderNativeLink = nativeRepo && (
    <Link
      to={nativeRepo}
      target="_blank"
      style={{ textDecoration: 'none', color: color }}
      onMouseEnter={() => setHoveredLink(2)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <InfoLinks>
        {window.innerWidth >= 768 && (
          <FontAwesomeIcon
            icon={faGithub}
            className="icon"
            style={{ marginRight: '0.5vw' }}
          />
        )}
        Native code
      </InfoLinks>
    </Link>
  );

  const renderBrowserLink = browserRepo && (
    <Link
      to={browserRepo}
      target="_blank"
      style={{ textDecoration: 'none', color: color }}
      onMouseEnter={() => setHoveredLink(2)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <InfoLinks>
        {window.innerWidth >= 768 && (
          <FontAwesomeIcon
            icon={faGithub}
            className="icon"
            style={{ marginRight: '0.5vw' }}
          />
        )}
        Browse code
      </InfoLinks>
    </Link>
  );

  const renderWebsiteLink = website && (
    <Link
      to={website}
      target="_blank"
      style={{ textDecoration: 'none', color: color }}
      onMouseEnter={() => setHoveredLink(3)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <InfoLinks>
        {window.innerWidth >= 768 && (
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ marginRight: '0.5vw' }}
          />
        )}
        The webpage
      </InfoLinks>
    </Link>
  );

  return (
    <Body backgroundColor={backgroundColor}>
      <Content color={color}>
        <PageDescription style={{ display: 'flex', flexDirection: 'column', font: '55vw', margin: '0' }}>
          {title}
          {PageDescription1}

          {PageDescription2 ? (
            <>
              <br />
              <br />
              {PageDescription2}
            </>
          ) : null}
          {PageDescription3 ? (
            <>
              <br />
              <br />
              {PageDescription3}
            </>
          ) : null}
          <LinkGroup>
            <Github>
              <LinkContainer numColumns={numColumns}>
                {renderNativeLink}
                {renderBrowserLink}
                {renderWebsiteLink}
              </LinkContainer>
            </Github>
          </LinkGroup>
        </PageDescription>
        <ImageContainer isSwitchActive={isSwitchActive}>
            <ImageGallerySlider color={color} images={isNative ? nativeImages : browserImages} />
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
  position: relative;
  display: flex;
  /* width: 100%; */
  background-color: ${props => props.backgroundColor};
  overflow: hidden; 
  padding: 0 50px 0 210px;

  @media (max-width: 1024px) {
    gap: 5vh; 
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
  align-items: center;
  justify-content: center;
  /* gap: 1em;  */
  animation: ${fadein} 0.8s forwards;
  color: ${props => props.color};
  /* overflow: hidden; */

  @media (max-width: 1024px) {
    width: 95%;
    padding-top: 50px;
    margin: 0 10px 0 0;
    gap: 20px;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 50px;
    margin: 0 10px 0 0;
    gap: 20px;
  }
  `


const PageDescription = styled.h3`
  display: flex;
  width: 32vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: Roboto Flex;
  font-weight: 500;
  align-self: flex-start;
  font-size: 1.3rem; 
  
  @media (max-width: 1024px) {
    font-size: 1.1em;
    width: 50vw;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    font-size: 1.1em;
    width: 90%;
  }

  @media (max-width: 425px) {
    font-size: 1.1em;
    width: 100%;
  }
  `
const LinkGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  margin-top: 2em;

  @media (max-width: 768px) {
   align-items: center;
   justify-content: space-between;
  }  

  @media (max-width: 425px) {
   width: 100%;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
  }  
`

const Github = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 0.5vw;
  width: 40%;
  min-width: 20vw;
  border-radius: 15px;
  border: 4px dotted ${props => props.color};

    @media (max-width: 1440px) {
      font-size: 1vw;
    }

    @media (max-width: 1024px) {
      font-size: 1vw;
    }

    @media (max-width: 965px) {
      font-size: 0.8vw;
      border: 2px dotted ${props => props.color};
    }

    @media (max-width: 768px) {
      width: 100%;
      border: none; 
    }

    @media (max-width: 425px) {
    width: 60%;
    }
`

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.numColumns}, 1fr);
  width: 100%;
  padding: 0.3vw;
  align-items: center;
  justify-content: space-evenly;
  
  @media (max-width: 425px) {
    flex-direction: row;
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
  font-size: 1.1vw;
  color: ${props => props.color};
  /* overflow: hidden; */
  border-radius: 10px;


  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    border: 1px dotted ${props => props.color};
    font-size: 1.2vw;
    /* width: 12vw; */
    padding: 10px;
    margin: 0 10px 0 0;

    &:active {
      background-color: var(--reddish);
      color: var(--darker);
    }

    @media (max-width: 425px) {
      font-size: 2vw;
      width: 18vw;
      padding: 2vw;
      font-size: 2.2vw;

    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  margin-left: ${props => props.isSwitchActive ? '2.5em' : '2.5em'};
`


export default PageBody