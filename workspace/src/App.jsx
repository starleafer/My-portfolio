import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../src/index.css'
import Mainpage from './components/pages/Mainpage'
import ChatApp from './components/pages/ChatApp';
import styled from 'styled-components'
import WebbShop from './components/pages/WebbShop';
import MovieApp from './components/pages/MovieApp';
import TicTacToe from './components/pages/TicTacToe';
import _ from 'lodash';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
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
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/chatapp" element={<ChatApp />} />
        <Route path="/webbshop" element={<WebbShop />} />
        <Route path="/movieapp" element={<MovieApp />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
      <motion.div
       className='cursor'
       variants={variants}
       animate="default"
       initial={false}
       transition={{ duration: 0.1, ease: 'linear', fill: 'forwards'}} // Set fill to 'forwards'
      />
    
    </>
  );
}


export default App
