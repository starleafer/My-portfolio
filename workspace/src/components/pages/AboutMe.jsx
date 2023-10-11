import React from 'react'
import Buttons from '../Buttons'
import styled from 'styled-components';

function AboutMe() {
  return (
    <Body>
      <Container>
        <h2>About me</h2>
      </Container>
    </Body>
  )
}

const Body = styled.div`
  height: 100vh;
  width: 100%
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default AboutMe