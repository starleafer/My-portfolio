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
import MasksAndCursor from "./components/MasksAndCursor";

function App() {
  const { runTransition } = useTransitionContext();
  const location = useLocation();
  const [bgColor, setBgColor] = useState("");
  const [showSplash, setShowSplash] = useState(false);

  const [isHoveringCards, setIsHoveringCards] = useState(false);
  const [isHoverButton, setIsHoverButton] = useState(false);
  const [cursorColor, setCursorColor] = useState("");
  const [cursorHoverColor, setCursorHoverColor] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorOpacity, setCursorOpacity] = useState(1);


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
        secondaryColor = "var(--bisque)";
        break;
      case chatapp:
        pathColor = "var(--light-purple)";
        secondaryColor = "var(--neon-green)";
        break;
      case movieapp:
        pathColor = "var(--darker)";
        secondaryColor = "var(--redish)";
        break;
      case "/about":
        pathColor = "white";
        secondaryColor = "white";
        break;
      default:
        pathColor = "";
    }

    setCursorOpacity(0);
    setTimeout(() => {
      setBgColor(pathColor);
      setCursorOpacity(1);
      setCursorHoverColor();
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



  return (
    <>
      {showSplash ? (
        <Splash />
      ) : (
        <CardProvider>
          <MasksAndCursor
            isHoverButton={isHoverButton}
            isHoveringCards={isHoveringCards}
            cursorColor={cursorColor}
            cursorHoverColor={cursorHoverColor}
          />
          <AppContainer color={bgColor}>
            <TransitionProvider>
              <Content>
                <Routes>
                  <Route
                    path={home}
                    element={
                      <ScrollContainer>
                        <Buttons path={home} setIsHoverButton={setIsHoverButton} />
                        <Mainpage setCursorHoverColor={setCursorHoverColor} setIsHoveringCards={setIsHoveringCards} />
                      </ScrollContainer>
                    }
                  />
                  <Route
                    path={cleaning}
                    element={
                      <ScrollContainer className="scrollCleaning">
                        <Buttons path={cleaning} setIsHoverButton={setIsHoverButton} />
                        <Cleaning />
                      </ScrollContainer>
                    }
                  />
                  <Route
                    path={chatapp}
                    element={
                      <ScrollContainer className="scrollChatApp">
                        <Buttons path={chatapp} setIsHoverButton={setIsHoverButton} />
                        <ChatApp />
                      </ScrollContainer>
                    }
                  />
                  <Route
                    path={webbshop}
                    element={
                      <ScrollContainer className="scrollWebbShop">
                        <Buttons path={webbshop} setIsHoverButton={setIsHoverButton} />
                        <WebbShop />
                      </ScrollContainer>
                    }
                  />
                  <Route
                    path={movieapp}
                    element={
                      <ScrollContainer className="scrollMovies">
                        <Buttons path={movieapp} setIsHoverButton={setIsHoverButton} />
                        <MovieApp />
                      </ScrollContainer>
                    }
                  />
                  <Route
                    path={tictactoe}
                    element={
                      <ScrollContainer>
                        <Buttons path={tictactoe} setIsHoverButton={setIsHoverButton} />
                        <TicTacToe />
                      </ScrollContainer>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <ScrollContainer>
                        <Buttons path="/about" about />
                        <AboutMe />
                      </ScrollContainer>
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
  /* height: 100%; */
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 100%; */
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 0.7em;
    align-items: flex-start;
  }
`;

export default App;