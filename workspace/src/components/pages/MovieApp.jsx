import React from 'react'
import styled from 'styled-components';

function MovieApp() {
  return (
    <Body>
      <Container>MovieApp</Container>
      </Body>
  )
}

const Body = styled.div`
  background-color: var(--dark);
  height: 100vh;
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
export default MovieApp