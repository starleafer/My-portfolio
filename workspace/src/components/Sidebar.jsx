import React from 'react'
import styled from 'styled-components';

function Sidebar() {
  return (
    <Container>
        <AvatarContainer />
        <SidebarContents>
            <Content>Home</Content>
            <Content>About me</Content>
            <Content>Contact</Content>
      
        </SidebarContents>
      
        
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw;
    border: solid black;
    border-width: 0 1px 0 0;
    align-items: center;
`
const AvatarContainer = styled.div`
    border: 3px solid var(--dark);
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
    margin-top: 2vh;
`

const SidebarContents = styled.div`
    display: flex;
    font-size: 1.3em;
    flex-direction: column;
    justify-content: space-evenly;
    /* border: 3px solid var(--dark); */
    height: 40vh;
    margin-top: 3vw;
`
const Content = styled.div`

`



export default Sidebar