import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
import styled from 'styled-components';
import Mainpage from './components/pages/Mainpage'
import ChatApp from './components/pages/ChatApp';
import WebbShop from './components/pages/WebbShop';
import MovieApp from './components/pages/MovieApp';
import TicTacToe from './components/pages/TicTacToe';
import '../src/index.css'
import _ from 'lodash';
import Sidebar from './components/Sidebar';
import Cleaning from './components/pages/Cleaning';
import { AnimatePresence } from 'framer-motion';
import AboutMe from './components/pages/AboutMe';
import Buttons from './components/Buttons';

function App({ router }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();


  function saveMousePosition(x, y) {
    sessionStorage.setItem('mousePosition', JSON.stringify({ x, y }));
  }

  function getSavedMousePosition() {
    const savedPosition = sessionStorage.getItem('mousePosition');
    return savedPosition ? JSON.parse(savedPosition) : null;
  }
  useEffect(() => {
    const savedPosition = getSavedMousePosition();

    if (savedPosition) {
      setMousePosition(savedPosition);
    }

    const mouseMove = e => {
      const x = e.clientX;
      const y = e.clientY;

      setMousePosition({ x, y });
      saveMousePosition(x, y);
    }


    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 1
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1
      }
    }
  };


  let whiteCursor = ''
  let whiteCursorDot = ''
  whiteCursor = location.pathname === '/movieapp' ? 'active' : '';
  whiteCursorDot = location.pathname === '/movieapp' ? 'active' : '';



  return (
    <AppContainer>
      <Content>
        <Routes>
          <Route path="/" element={<RouteContainer><Buttons /><Mainpage /></RouteContainer>} />
          <Route path="/cleaning" element={<RouteContainer><Buttons /><Cleaning /></RouteContainer>} />
          <Route path="/chatapp" element={<RouteContainer><Buttons /><ChatApp /></RouteContainer>} />
          <Route path="/webbshop" element={<RouteContainer><Buttons /><WebbShop /></RouteContainer>} />
          <Route path="/movieapp" element={<RouteContainer><Buttons /><MovieApp /></RouteContainer>} />
          <Route path="/tictactoe" element={<RouteContainer><Buttons /><TicTacToe /></RouteContainer>} />
          <Route path="/about" element={<RouteContainer><Buttons /><AboutMe /></RouteContainer>} />
        </Routes>

        <m.div
          className={`cursor ${whiteCursor === 'active' ? 'whiteCursor' : ''}`}
          variants={variants}
          animate="default"
          initial={false}
          transition={{ duration: 0.1, ease: 'linear', fill: 'forwards' }}
        >
          <div className={`cursor-dot ${whiteCursorDot === 'active' ? 'whiteCursorDot' : ''}`} />
        </m.div>
      </Content>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  /* height: 100%; */
  position: relative;
  overflow: hidden;
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
