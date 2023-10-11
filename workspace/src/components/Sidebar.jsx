import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion as m } from 'framer-motion'

function Sidebar() {
  const location = useLocation();

  let sidebarclass = '';

  if (location.pathname === '/chatapp') {
    sidebarclass = 'chatapp'
  } else if (location.pathname === '/tictactoe') {
    sidebarclass = 'tictactoe'
  } else if (location.pathname === '/webbshop') {
    sidebarclass = 'webbshop'
  } else if (location.pathname === '/movieapp') {
    sidebarclass = 'movieapp'
  } else if (location.pathname === '/cleaning') {
    sidebarclass = 'cleaning'
  }


  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    if (location.pathname === '/chatapp') {
      cursor.style.borderColor = 'var(--neon-green)';
    } else if (location.pathname === '/tictactoe') {
        cursor.style.borderColor = 'var(--blueish)'
    } else if (location.pathname === '/webbshop') {
        cursor.style.borderColor = 'bisque'
    } else if (location.pathname === '/movieapp') {
        cursor.style.borderColor = 'var(--redish)'
    } else if (location.pathname === '/cleaning') {
        cursor.style.borderColor = 'var(--dark)'
    } else {
      cursor.style.borderColor = 'var(--dark)';
    }
  }, [location.pathname])

  return (
    <Container 
    className={sidebarclass}
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    exit={{ opacity: 1 }}
    >
        <AvatarContainer className={sidebarclass} />
        <SidebarContents className={sidebarclass}>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
            <Content className={sidebarclass}>Home</Content>
        </Link>
            <Content className={sidebarclass}>About me</Content>
            <Content className={sidebarclass}>Contact</Content>
        </SidebarContents> 
    </Container>
  )
}

const Container = styled(m.div)`
    display: flex;
    flex-direction: column;
    width: 10vw;
    border: solid black;
    border-width: 0 1px 0 0;
    align-items: center;
    background-color: transparent;
    

    &.chatapp {
        /* background-color: var(--light-purple); */
        color: var(--neon-green);
        border-color: var(--neon-green)
    }

    &.tictactoe {
        /* background-color: var(--redish); */
        color: var(--blueish);
        border-color: var(--blueish)
    }

    &.webbshop{
        /* background-color: var(--greenish); */
        color: bisque;
        border-color: bisque;
    }

    &.movieapp{
        /* background-color: var(--dark); */
        color: var(--redish);
        border-color: var(--reddish);
    }

    &.cleaning{
        /* background-color: var(--yellowish); */
    }
`
const AvatarContainer = styled.div`
    border: 3px solid var(--dark);
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
    margin-top: 2vh;

    &.chatapp {
        /* background-color: var(--light-purple); */
        color: var(--neon-green);
        border-color: var(--neon-green)
    }

    &.tictactoe {
        /* background-color: var(--redish); */
        color: var(--blueish);
        border-color: var(--blueish)
    }

    &.webbshop{
        /* background-color: var(--greenish); */
        color: bisque;
        border-color: bisque;
    }

    &.movieapp{
        /* background-color: var(--dark); */
        color: var(--redish);
        border-color: var(--reddish);
    }

    &.cleaning{
        /* background-color: var(--yellowish); */
    }
`

const SidebarContents = styled.div`
    display: flex;
    font-size: 1.3em;
    flex-direction: column;
    justify-content: space-evenly;
    height: 40vh;
    width: 6vw;
    margin-top: 3vw;

    &.chatapp {
        /* background-color: var(--light-purple); */
        color: var(--neon-green);
    }

    &.tictactoe {
        /* background-color: var(--redish); */
        color: var(--blueish);
        border-color: var(--blueish)
    }

    &.webbshop{
        /* background-color: var(--greenish); */
        color: bisque;
        border-color: bisque;
    }

    &.movieapp{
        /* background-color: var(--dark); */
        color: var(--redish);
        border-color: var(--reddish);
    }

    &.cleaning{
        /* background-color: var(--yellowish); */
    }
`
const Content = styled.div`
    color: var(--dark);
    font-size: 1em;
    font-weight: 700;
    transition: 0.3s; 

    &.chatapp {
        /* background-color: var(--light-purple); */
        color: var(--neon-green);
    }

    &.tictactoe {
        /* background-color: var(--redish); */
        color: var(--blueish);
        border-color: var(--blueish)
    }

    &.webbshop{
        /* background-color: var(--greenish); */
        color: bisque;
        border-color: bisque;
    }

    &.movieapp{
        /* background-color: var(--dark); */
        color: var(--redish);
        border-color: var(--reddish);
    }

    &.cleaning{
        /* background-color: var(--yellowish); */
    }

    &:hover {
        color: tomato;
        font-size: 1.2em;

    }
`



export default Sidebar