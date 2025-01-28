import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { motion as m, motion, useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useCardContext } from "../context/CardContext";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import PageNavigationButton from "./PageNavigationButton";
import ImageGallerySlider from "./ImageGallerySlider";
import ParallaxImage from "./ParallaxImage";
import CustomButton from "./CustomButton";
import ProjectDescription from "./ProjectDescription";

function PageBody({
  title,
  descriptions,
  repos,
  nativeRepo,
  browserRepo,
  website,
  nativeImages = [],
  browserImages = [],
  isNative,
  isBrowser,
  showSwitch,
  invertedColors,
}) {
  const [isSwitchActive, setIsSwitchActive] = useState(false);
  const { card } = useCardContext();

  const links = [nativeRepo, browserRepo, website].filter((link) => link);
  const numColumns = links.length;

  const currentPath = window.location.pathname.replace("/", "");
  const currentCard = card.find((item) => item.path === currentPath) || card[0];
  const color = currentCard.color;
  const backgroundColor = currentCard.backgroundColor;
  const shadowColor = currentCard.shadow;

  const renderNativeLink = nativeRepo && (
    <CustomButton
      color={color}
      backgroundColor={backgroundColor}
      onClick={() => window.open(nativeRepo, "_blank")}
      label={
        <>
          {window.innerWidth >= 768 && (
            <FontAwesomeIcon
              icon={faGithub}
              className="icon"
              style={{ marginRight: "0.5vw" }}
            />
          )}
          Native code
        </>
      }
    />
  );

  const renderBrowserLink = browserRepo && (
    <CustomButton
      color={color}
      backgroundColor={backgroundColor}
      onClick={() => window.open(browserRepo, "_blank")}
      label={
        <>
          {window.innerWidth >= 768 && (
            <FontAwesomeIcon
              icon={faGithub}
              className="icon"
              style={{ marginRight: "0.5vw" }}
            />
          )}
          Browser code
        </>
      }
    />
  );

  const renderWebsiteLink = website && (
    <CustomButton
      color={color}
      backgroundColor={backgroundColor}
      onClick={() => window.open(website, "_blank")}
      label={
        <>
          {window.innerWidth >= 768 && (
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ marginRight: "0.5vw" }}
            />
          )}
          The webpage
        </>
      }
    />
  );

  return (
    <Body backgroundColor={backgroundColor}>
      <Content color={color}>
        <TitleContainer>
          <PageNavigationButton title={title} shadowColor={shadowColor} />
        </TitleContainer>
        <ContentGroup>
          <ProjectDescription
            descriptions={descriptions}
            repos={repos}
            color={color}
            backgroundColor={backgroundColor}
          />
          <LinkGroup>
            {/* <Github>
                <LinkContainer numColumns={numColumns}>
                  {renderNativeLink}
                  {renderBrowserLink}
                  {renderWebsiteLink}
                </LinkContainer>
              </Github> */}
          </LinkGroup>
          <ImageContainer isSwitchActive={isSwitchActive}>
            {isNative ? (
              <ParallaxImage
                images={nativeImages}
                backgroundColor={backgroundColor}
                color={color}
                invertedColors={invertedColors}
                isNative={isNative}
              />
            ) : (
              <ParallaxImage
                images={browserImages}
                backgroundColor={backgroundColor}
                color={color}
                invertedColors={invertedColors}
              />
            )}
          </ImageContainer>
        </ContentGroup>
      </Content>
    </Body>
  );
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
  background-color: ${(props) => props.backgroundColor};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0 0 0 0;

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
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  animation: ${fadein} 0.8s forwards;
  position: relative; // Add this

  color: ${(props) => props.color};

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
`;

const ContentGroup = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 100px);
  align-items: center;
  justify-content: start;
  flex-direction: row;
  margin-left: 10vw;
  gap: 4em;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

// const PageDescription = styled.div`
//   display: flex;
//   width: 32vw;
//   height: 100vh;
//   padding-top: 2em;
//   align-items: center;
//   justify-content: start;
//   font-family: 'Lato', sans-serif;   /* Roboto Flex; */
//   font-weight: 500;
//   align-self: flex-start;
//   font-size: clamp(10px, 2vw, 21px);

//   @media (max-width: 1024px) {
//     font-size: 1.1em;
//     width: 50vw;
//     flex-wrap: wrap;
//   }
//   @media (max-width: 768px) {
//     font-size: 1.1em;
//     width: 90%;
//   }

//   @media (max-width: 425px) {
//     font-size: 1.1em;
//     width: 100%;
//   }
// `;

const LinkGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  margin-top: 2em;
  z-index: 200;
  position: relative;

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
`;

// const Github = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 0.5em 1em;
//   border-radius: 15px;
//   border: 4px dotted ${(props) => props.color};

//   @media (max-width: 1440px) {
//     font-size: 1vw;
//   }

//   @media (max-width: 1024px) {
//     font-size: 1vw;
//   }

//   @media (max-width: 965px) {
//     font-size: 0.8vw;
//     border: 2px dotted ${(props) => props.color};
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     border: none;
//   }

//   @media (max-width: 425px) {
//     width: 60%;
//   }
// `;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numColumns}, 1fr);
  width: 100%;
  padding: 0.4vw;
  align-items: center;
  justify-content: space-evenly;
  gap: 1em;

  @media (max-width: 425px) {
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
  }
`;

const InfoLinks = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-family: "Roboto Flex";
  font-size: clamp(10px, 2vw, 21px);
  color: ${(props) => props.color};
  border-radius: 10px;

  &:hover {
    color: #fff;
  }
`;

const ImageContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

export default PageBody;
