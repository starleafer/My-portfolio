'use client';
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Mainpage from "./components/pages/Mainpage";
import ChatApp from "./components/pages/ChatApp";
import WebbShop from "./components/pages/WebbShop";
import MovieApp from "./components/pages/MovieApp";
import TicTacToe from "./components/pages/TicTacToe";
import Cleaning from "./components/pages/Cleaning";
import AboutMe from "./components/pages/AboutMe";
import Buttons from "./components/Buttons";
import { CardProvider } from "./context/CardContext";
import { TransitionProvider, useTransitionContext } from "./context/TransitionContext";
import "../src/index.css";
import Splash from "./components/Splash";
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';

function App() {
  const { runTransition } = useTransitionContext();
  const location = useLocation();
  const [bgColor, setBgColor] = useState("");
  const [showSplash, setShowSplash] = useState(true);

  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState("");
  const [cursorHoverColor, setCursorHoverColor] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorOpacity, setCursorOpacity] = useState(1);

  const { x, y } = useMousePosition();

  const size = isHovering ? 80 : 40;

  const home = "/";
  const cleaning = "/cleaning";
  const chatapp = "/chatapp";
  const webbshop = "/webbshop";
  const movieapp = "/movieapp";
  const tictactoe = "/tictactoe";

  useEffect(() => {
    let pathColor = "";
    let secondaryColor = "";

    switch (location.pathname) {
      case home:
        secondaryColor = "var(--dark)";
        break;
      case cleaning:
        pathColor = "var(--yellowish)";
        secondaryColor = "var(--dark)";
        break;
      case tictactoe:
        pathColor = "var(--redish)";
        secondaryColor = "var(--blueish)";
        break;
      case webbshop:
        pathColor = "var(--greenish)";
        secondaryColor = "bisque";
        break;
      case chatapp:
        pathColor = "var(--light-purple)";
        secondaryColor = "var(--neon-green)";
        break;
      case movieapp:
        pathColor = "var(--darker)";
        secondaryColor = "var(--redish)";
        break;
      default:
        pathColor = "";
    }


    setCursorOpacity(0); // Fade out cursor
    setTimeout(() => {
      setBgColor(pathColor);
      setCursorOpacity(1); // Fade in cursor
    }, 300);
    setCursorColor(secondaryColor);

  }, [location.pathname]);


  useEffect(() => {
    const timeoutId = setTimeout(() => setShowSplash(false), 3200);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (runTransition) {
      setCursorVisible(false);
      setTimeout(() => setCursorVisible(true));
    }
  }, [runTransition]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      {showSplash ? (
        <Splash />
      ) : (
        <CardProvider>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Cursor
              color={(() => {
                const color = isHovering ? cursorHoverColor : cursorColor;
                console.log('Active color:', isHovering ? 'cursorHoverColor' : 'cursorColor', color);
                return color;
              })()}
              style={{
                opacity: cursorVisible ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
              }}
              animate={{
                WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                WebkitMaskSize: `${size}px`,
              }}
              transition={{
                type: 'tween',
                ease: 'backOut',
                duration: 0.2
              }}
            />
          </div>
          <AppContainer color={bgColor}>
            <TransitionProvider>
              <Content>
                <Routes>
                  <Route
                    path={home}
                    element={
                      <RouteContainer>
                        <Buttons path={home} />
                        <Mainpage setCursorHoverColor={setCursorHoverColor} setIsHovering={setIsHovering} />
                      </RouteContainer>
                    }
                  />
                  <Route
                    path={cleaning}
                    element={
                      <RouteContainer className="scrollCleaning">
                        <Buttons path={cleaning} />
                        <Cleaning />
                      </RouteContainer>
                    }
                  />
                  <Route
                    path={chatapp}
                    element={
                      <RouteContainer className="scrollChatApp">
                        <Buttons path={chatapp} />
                        <ChatApp />
                      </RouteContainer>
                    }
                  />
                  <Route
                    path={webbshop}
                    element={
                      <RouteContainer className="scrollWebbShop">
                        <Buttons path={webbshop} />
                        <WebbShop />
                      </RouteContainer>
                    }
                  />
                  <Route
                    path={movieapp}
                    element={
                      <RouteContainer className="scrollMovies">
                        <Buttons path={movieapp} />
                        <MovieApp />
                      </RouteContainer>
                    }
                  />
                  <Route
                    path={tictactoe}
                    element={
                      <RouteContainer>
                        <Buttons path={tictactoe} />
                        <TicTacToe />
                      </RouteContainer>
                    }
                  />
                </Routes>
              </Content>
            </TransitionProvider>
          </AppContainer>
        </CardProvider>
      )}
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.color};
`;

const Content = styled.div`
  flex-grow: 1;
  height: 100%;
`;

const RouteContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 0.7em;
    align-items: flex-start;
  }
`;

const Cursor = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100vh; 
  mask-image: url('/mask.svg'); 
  mask-size: contain; 
  mask-position: center; 
  mask-repeat: no-repeat; 
  background: ${(props) => props.color};
  -webkit-mask-image: url('/mask.svg'); 
  -webkit-mask-size: contain;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  pointer-events: none; 
  z-index: 100; 
`;

export default App;