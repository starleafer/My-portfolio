import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function ChatApp() {

  return (
    <Body>
      <Container>
        Chat app
      </Container>
    </Body>
  )
}

const Body = styled.div`
  background-color: var(--light-purple);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  width: 70vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--neon-green);
  /* background-color: #0ac753; */
  color: var(--neon-green);
  border-radius: 15px;
`

export default ChatApp