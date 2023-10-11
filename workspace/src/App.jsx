import { Routes, Route } from 'react-router-dom';
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

  return (
    <AppContainer>
      <Content>
        <Routes>
          <Route path="/" element={
           <>
              <Buttons />
              <AnimatePresence>
                <Mainpage key={router.pathname} />
              </AnimatePresence>
            </>
          } />
          <Route path="/cleaning" element={
           <>
              <Buttons />
              <AnimatePresence>
                <Cleaning key={router.pathname} />
              </AnimatePresence>
            </>
          } />
          <Route path="/webbshop" element={
            <>
              <Buttons />
              <AnimatePresence>
                <WebbShop key={router.pathname} />
              </AnimatePresence>
            </>
          } />
          <Route path="/chatapp" element={<><Buttons /><ChatApp /></>} />
          {/* <Route path="/webbshop" element={<><Buttons /><WebbShop /></>} /> */}
          <Route path="/movieapp" element={<><Buttons /><MovieApp /></>} />
          <Route path="/tictactoe" element={<><Buttons /><TicTacToe /></>} />
          <Route path="/about" element={<><Buttons /><AboutMe /></>} />
        </Routes>
        <m.div
          className='cursor'
          variants={variants}
          animate="default"
          initial={false}
          transition={{ duration: 0.1, ease: 'linear', fill: 'forwards' }}
        >
          <div className="cursor-dot" />
        </m.div>
      </Content>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;

`;

const Content = styled.div`
  flex-grow: 1;
`;

export default App
