import React, { useState } from 'react'
import styled from "styled-components";
import PageBody from '../PageBody';
import TransitionScreen from '../TransitionScreen';

function ChatApp() {
  const [isNative, setIsNative] = useState(true)
  const [isBrowser, setIsBrowser] = useState(false)

  const title = "Class Chat"

  const PageDescription1 = "Class Chat serves as a dedicated platform for group communication, meticulously designed to facilitate smooth interaction within your class or group. Leveraging CRUD logic (Create, Read, Update, Delete), it efficiently manages users and messages, ensuring easy collaboration. Security is paramount, with the implementation of a secure access token mechanism, allowing only authorized individuals to join the conversation."

  const PageDescription2 = "Whether you're in a classroom setting or simply spending time with your friends, Class Chat provides a comprehensive solution for your communication needs. The platform empowers you to create a dynamic and engaging space for your group, giving you control over participants and content. Here's to hassle-free communication!"

  const nativeRepo = "https://github.com/starleafer/ClassChat"

  const nativeImages = [
    { id: "1", src: '/pageimages/chatapp/login.jpg' },
    { id: "2", src: '/pageimages/chatapp/registeruser.jpg' },
    { id: "3", src: '/pageimages/chatapp/chat.jpg' },
    { id: "4", src: '/pageimages/chatapp/drawer.jpg' },
    { id: "5", src: '/pageimages/chatapp/profile.jpg' },
    { id: "6", src: '/pageimages/chatapp/photo.jpg' },
    { id: "7", src: '/pageimages/chatapp/profilephoto.jpg' },
    { id: "8", src: '/pageimages/chatapp/chatphoto.jpg' },
  ];

  return (
    <>
      <PageBody
        title={<PageTitle>{title}</PageTitle>}
        PageDescription1={PageDescription1}
        PageDescription2={PageDescription2}
        nativeRepo={nativeRepo}
        nativeImages={nativeImages}
        isNative={isNative}
        isBrowser={isBrowser}
        previousPage
        nextPage
      />
      <TransitionScreen />
    </>
  )
}

const PageTitle = styled.h1`
font-size: 6em;
width: 80%;
  align-self: flex-start;
  color: var(--neon-green);
  
  @media (max-width: 1024px) {
    margin: 1.5vh 0;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8em;
  }
  
  @media (max-width: 425px) {
    font-size: 1.8em;
  }
  `

export default ChatApp