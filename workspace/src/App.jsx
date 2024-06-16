import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Mainpage from './components/pages/Mainpage'
import ChatApp from './components/pages/ChatApp';
import WebbShop from './components/pages/WebbShop';
import MovieApp from './components/pages/MovieApp';
import TicTacToe from './components/pages/TicTacToe';
import Cleaning from './components/pages/Cleaning';
import AboutMe from './components/pages/AboutMe';
import Buttons from './components/Buttons';
import { CardProvider } from './context/CardContext';
import { TransitionProvider } from './context/TransitionContext';
import '../src/index.css'
import _ from 'lodash';
import Splash from './components/Splash';


function App({ router, props }) {
  const [bgColor, setBgColor] = useState('')
  const [showSplash, setShowSplash] = useState(true)
  const location = useLocation();

  const home = "/"
  const cleaning = "/cleaning"
  const chatapp = "/chatapp"
  const webbshop = "/webbshop"
  const movieapp = "/movieapp"
  const tictactoe = "/tictactoe"
  const about = "/about"

  useEffect(() => {
    let pathColor = '';

    switch (location.pathname) {
      case '/cleaning':
        pathColor = 'var(--yellowish)';
        break;
      case '/tictactoe':
        pathColor = 'var(--redish)';
        break;
      case '/webbshop':
        pathColor = 'var(--greenish)';
        break;
      case '/chatapp':
        pathColor = 'var(--light-purple)';
        break;
      case '/movieapp':
        pathColor = 'var(--darker)';
        break;

      default:
        pathColor = '';
    }

    setBgColor(pathColor);
  }, [location.pathname]);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowSplash(false), 3200);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showSplash ? 
      <Splash />
      :
      <CardProvider>
        <AppContainer color={bgColor}>
          <TransitionProvider>
            <Content>
              <Routes>
                <Route path={home} element={
                  <RouteContainer>
                    <Buttons path={home} />
                    <Mainpage />
                  </RouteContainer>
                } />
                <Route path={cleaning} element={
                  <RouteContainer className='scrollCleaning'>
                    <Buttons path={cleaning} />
                    <Cleaning />
                  </RouteContainer>
                } />

                <Route path={chatapp} element={
                  <RouteContainer className='scrollChatApp'>
                    <Buttons path={chatapp} />
                    <ChatApp />
                  </RouteContainer>
                } />

                <Route path={webbshop} element={
                  <RouteContainer className='scrollWebbShop'>
                    <Buttons path={webbshop} />
                    <WebbShop />
                  </RouteContainer>
                } />

                <Route path={movieapp} element={
                  <RouteContainer className='scrollMovies'>
                    <Buttons path={movieapp} />
                    <MovieApp />
                  </RouteContainer>
                } />

                <Route path={tictactoe} element={
                  <RouteContainer>
                    <Buttons path={tictactoe} />
                    <TicTacToe />
                  </RouteContainer>
                } />

                <Route path={about} element={
                  <RouteContainer className='scrollTictac'>
                    <Buttons path={about} />
                    <AboutMe />
                  </RouteContainer>
                } />
              </Routes>
            </Content>
          </TransitionProvider>
        </AppContainer>
      </CardProvider>
    }
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  /* height: 100%; */
  position: relative;
  overflow: hidden;
  background-color: ${props => props.color};

  `;

const Content = styled.div`
    flex-grow: 1;
    /* height: 100%; */
    `;

const RouteContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 768px) {
     flex-direction: column;
     font-size: 0.7em;
     align-items: flex-start;
  }
`


export default App
