import React from 'react'
import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTransitionContext } from '../context/TransitionContext';
import TransitionScreen from './TransitionScreen';
import { useCardContext } from '../context/CardContext';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import PageNavigationButton from './PageNavigationButton';

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
}) {

  const { runTransition } = useTransitionContext();
  const { card } = useCardContext();

  const links = [nativeRepo, browserRepo, website].filter(link => link);
  const numColumns = links.length;

  const currentPath = window.location.pathname.replace('/', '');
  const currentCard = card.find(item => item.path === currentPath) || card[0];
  const color = currentCard.color;

  const renderNativeLink = isNative && (
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

  const renderBrowserLink = isBrowser && (
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
        Browser code
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
    <>
      <Content color={color}>
        <InfoSection>
          {title}
          <Info>
            <PageDescription style={{ display: 'flex', flexDirection: 'column', font: '55vw', margin: '0' }}>
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
            </PageDescription>
            
            <LinkGroup>
              <Github>
                <LinkContainer numColumns={numColumns}>
                  {renderNativeLink}
                  {renderBrowserLink}
                  {renderWebsiteLink}
                </LinkContainer>
              </Github>
              <PageNavigationButton />
            </LinkGroup>
          </Info>
        </InfoSection>
        {isNative ? (
          <Native>
            {isBrowser ? <NativeHeader>React Native</NativeHeader> : ""}
            <ImageContainer>
              {nativeImages.map(image => (
                <MobileImage key={image.id} src={image.src} />
              ))}
            </ImageContainer>
          </Native>
        ) : null}

        {isBrowser ? (
          <Browser>
            {isNative ? <BrowserHeader>React</BrowserHeader> : ""}
            <ImageContainer style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              {browserImages.map(image => (
                <BrowserImage key={image.id} src={image.src} alt={image.alt} />
              ))}
            </ImageContainer>
          </Browser>
        ) : null}
        <PageNavigationButton />
      </Content>
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 100px 0;
  gap: 5vh; 
  animation: ${fadein} 0.8s forwards;
  color: ${props => props.color};
  /* border: 1px solid orange; */

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

const InfoSection = styled.div`
  width: 95%;
  min-width: 60%;
  /* border: 1px solid pink; */
  
  @media (max-width: 1024px) {
    width: 100%;
  }


  @media (max-width: 768px) {
  align-items: center;
  width: 100%;
  margin: 0;
}
`

const Info = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 3vw;
  font-size: 1.1em;
  font-weight: 600;
  /* border: 1px solid green; */

  @media (max-width: 1440px) {
    font-size: 1vw;
    width: 100%;

  }
  @media (max-width: 1024px) {
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

const PageDescription = styled.h3`
  font-family: Roboto Flex;
  font-weight: 500;
  width: 55vw;
  align-self: flex-start;
  font-size: 1.2vw; 
  /* border: 1px solid blue; */
  
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
  /* border: 1px solid red; */

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
  /* border: 1px solid orange; */
  
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
  overflow: hidden;
  border-radius: 10px;
  /* border: 1px solid purple; */


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
const NativeHeader = styled.h3`
  width: 100%;
  font-weight: 700;
  color: ${props => props.color};

  @media (max-width: 768px) {
    width: 100%;
    font-size: 2vw;
  }
`
const Native = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-items: center;
  /* border: 1px  solid green; */

  @media (max-width: 1440px) {
    align-items: flex-start;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  grid-template-rows: repeat(2, 1fr);    
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
    color: ${props => props.color};

    @media (max-width: 768px) {
      width: 100%;
      font-size: 2vw;
  }
`

const Browser = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid green; */

  @media (max-width: 1440px) {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`

const BrowserImage = styled.img`
  width: 100%;
  border-radius: 10px;
  /* border: 1px solid #201c1cab; */
`;

export default PageBody