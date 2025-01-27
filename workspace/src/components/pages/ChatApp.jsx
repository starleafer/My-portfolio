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
    { id: "1", src: '/pageimages/chatapp/login.jpg', info: "Welcome to Class Chat! Login to get started!", alt: 'browser search' },
    { id: "2", src: '/pageimages/chatapp/registeruser.jpg', info: "Register a new user!", alt: 'browser pager' },
    { id: "3", src: '/pageimages/chatapp/chat.jpg', info: "Start chatting with your friends!", alt: 'browser series' },
    { id: "4", src: '/pageimages/chatapp/drawer.jpg', info: "And you can also manage your profile here!", alt: 'browser series' },
    { id: "5", src: '/pageimages/chatapp/profile.jpg', info: "Check out your profile!", alt: 'browser series' },
    { id: "6", src: '/pageimages/chatapp/photo.jpg', info: "Upload a profile picture!", alt: 'browser series' },
    { id: "7", src: '/pageimages/chatapp/profilephoto.jpg', info: "And you can also upload a profile picture!", alt: 'browser series' },
    { id: "8", src: '/pageimages/chatapp/chatphoto.jpg', info: "Cool!", alt: 'browser series' },
  ];

  return (
    <>
      <PageBody
        title={title}
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


export default ChatApp