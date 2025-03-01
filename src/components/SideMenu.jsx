import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "./CustomButton";
import { useCardContext } from "../context/CardContext";
import Curve from "./Curve";

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i },
  }),
};

const SideMenu = ({ color, backgroundColor, isOpen, onNavigate }) => {
  const { main } = useCardContext();
  const [copySuccessMessage, setCopySuccessMessage] = useState("");

  const handleButtonClick = (repo) => {
    if (Object.keys(repo)[0] === "email") {
      setCopySuccessMessage("Email copied!");
      navigator.clipboard.writeText("emil.stjernlof@gmail.com");

      setTimeout(() => {
        setCopySuccessMessage("");
      }, 3000);
    } else if (Object.keys(repo)[0] === "browser") {
      window.open(repo.browser, "_blank");
    } else if (Object.keys(repo)[0] === "linkedin") {
      window.open(repo.linkedin, "_blank");
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <SideMenuContainer
            as={motion.div}
            color={color}
            backgroundColor={backgroundColor}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={menuSlide}
          >
            <Curve color={color} />
            <SideMenuContent>
              <ContentWrapper>
 
                  <motion.div
                    custom={0}
                    variants={slide}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <ButtonWrapper>
                      <CustomButton
                        label={<ESWrapper>ES</ESWrapper>}
                        invertedColors={true}
                        color={color}
                        backgroundColor={backgroundColor}
                        onClick={(e) => onNavigate("/about", "var(--dark)", e)}
                      />
                    </ButtonWrapper>
                  </motion.div>
                  {main.repos.map((repo, index) => (
                    <motion.div
                      key={index}
                      custom={index + 1}
                      variants={slide}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <ButtonWrapper>
                        <CustomButton
                          color={color}
                          backgroundColor={backgroundColor}
                          invertedColors={true}
                          onClick={() => handleButtonClick(repo)}
                          label={<IconWrapper>{repo.icon}</IconWrapper>}
                          showCopyAlert={
                            Object.keys(repo)[0] === "email" &&
                            copySuccessMessage
                          }
                          copyMessage={copySuccessMessage}
                          animationY={true}
                        />
                      </ButtonWrapper>
                    </motion.div>
                  ))}
             
              </ContentWrapper>
            </SideMenuContent>
          </SideMenuContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;

const SideMenuContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  width: 15rem;
  height: 100%;
  background-color: ${({ color }) => color};
  color: ${({ backgroundColor }) => backgroundColor};
  z-index: 150;
`;

const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  width: 5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) and (min-width: 320px) {
    width: 4rem;
    height: 2rem;
  }
`;

const ESWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  font-size: clamp(1.8rem, 1.8vw, 2rem);
  font-weight: bold;
  padding-right: 0.1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: translateZ(0);
  will-change: transform;
  max-width: 100%;
  

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 1em;
    font-size: 1.4rem;
  }

  svg {
    width: 2em;
    height: 2em;
    flex-shrink: 0;

    @media (max-width: 768px) and (min-width: 320px) {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 3rem;

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 1rem;
    height: 40vh;
    justify-content: space-around;
    align-items: center;
  }
`;
