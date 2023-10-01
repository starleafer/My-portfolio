import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Cleaning() {

  return (
    <Body>
      <Container>
        Chat app
      </Container>
    </Body>
  )
}

const Body = styled.div`
  background-color: var(--yellowish);
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
  border: 2px solid var(--dark);
  color: var(--dark);
  border-radius: 15px;
`

export default Cleaning