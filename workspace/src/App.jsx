'use client';
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
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
import { TransitionProvider } from "./context/TransitionContext";
import "../src/index.css";
import _ from "lodash";
import Splash from "./components/Splash";
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';

function App({ router, props }) {
  const [bgColor, setBgColor] = useState("");
  const [secondary, setSecondary] = useState("");
  const [showSplash, setShowSplash] = useState(true);

  const [isHovering, setIsHovering] = useState(false);
  const [cursorHoverColor, setCursorHoverColor] = useState(""); 

  const { x, y } = useMousePosition();
  const size = isHovering ? 80 : 40;

  const location = useLocation();

  const home = "/";
  const cleaning = "/cleaning";
  const chatapp = "/chatapp";
  const webbshop = "/webbshop";
  const movieapp = "/movieapp";
  const tictactoe = "/tictactoe";
  const about = "/about";

  useEffect(() => {
    let pathColor = "";
    let secondaryColor = "";

    switch (location.pathname) {

      case "/":
        secondaryColor = "var(--dark)";
        break;
      case "/cleaning":
        pathColor = "var(--yellowish)";
        secondaryColor = "var(--dark)";
        break;
      case "/tictactoe":
        pathColor = "var(--redish)";
        secondaryColor = "var(--blueish)";
        break;
      case "/webbshop":
        pathColor = "var(--greenish)";
        secondaryColor = "bisque";
        break;
      case "/chatapp":
        pathColor = "var(--light-purple)";
        secondaryColor = "var(--neon-green)";
        break;
      case "/movieapp":
        pathColor = "var(--darker)";
        secondaryColor = "var(--redish)";
        break;

      default:
        pathColor = "";
    }

    setBgColor(pathColor);
    setSecondary(secondaryColor);
  }, [location.pathname]);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowSplash(false), 3200);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showSplash ? (
        <Splash />
      ) : (
        <CardProvider>
          <Cursor
            style={{ backgroundColor: cursorHoverColor }} 
            animate={{
              WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          />
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

                  <Route
                    path={about}
                    element={
                      <RouteContainer className="scrollTictac">
                        <Buttons path={about} />
                        <AboutMe />
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
  width: 100vw; // Ensure the mask covers the entire viewport width
  height: 100vh; // Ensure the mask covers the entire viewport height
  mask-image: url('/mask.svg'); // Use absolute path
  mask-size: contain; // Ensure the mask image retains its aspect ratio
  mask-position: center; // Center the mask image
  mask-repeat: no-repeat; // Prevent the mask image from repeating
  background: var(--dark);
  -webkit-mask-image: url('/mask.svg'); // For WebKit browsers
  -webkit-mask-size: contain;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  pointer-events: none; // Ensure the cursor does not interfere with other elements
  z-index: 9999; // Ensure the cursor is on top of other elements


`;


export default App;
