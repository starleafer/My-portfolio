import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const Logo = ({ logo }) => {

    return (
        <Container>
            {logo === 1 && <CleaningContainer><Dust>Dust</Dust><Busters>Busters</Busters></CleaningContainer>}
            {logo === 2 && <></>}
            {logo === 3 && <><SoleSoul>SoleSoul.com</SoleSoul></>}
            {logo === 4 &&
                <ChatContainer>
                    <ClassChat>Class</ClassChat>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-10px', gap: '5px' }}>
                        <ClassChat style={{ marginLeft: '55px' }}>Chat</ClassChat>
                        <FontAwesomeIcon style={{ color: 'var(--neon-green)', marginTop: '12px', fontStyle: 'bold' }} icon={faMessage} />
                    </div>
                </ChatContainer>}
            {logo === 5 && <MovieNight>Movie Night</MovieNight>}
        </Container>
    )
}

export default Logo

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-family: 'Poppins';
    /* border: 5px solid var(--dark); */

    
    @media (max-width: 768px) {
     /* visibility: hidden; */
     }
    @media (max-width: 375px) {
     /* visibility: hidden; */
    }
`
const CleaningContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    background-color: var(--dark);
`

const Dust = styled.div`
    font-size: 1.1em;
    color: white;
    font-family: 'Poppins';

`

const Busters = styled.div`
    font-size: 1.1em;
    color: #FFD530;
    font-family: 'Poppins';


`

const SoleSoul = styled.div`
    font-size: 1.2em;
    color: bisque;
    font-family: 'Righteous';
`

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 3px;
    margin-right: 30px;
`

const ClassChat = styled.div`
    font-size: 1.4em;
    color:#F7ECE1;
    font-family: 'Arial';
`

const MovieNight = styled.div`
  font-size: 1.2em;
  font-family: "Righteous";
  color: bisque;
  padding: 5px;
  border: 4px solid bisque;
  border-radius: 10px;
  text-shadow: 0 0 0.125em rgb(223, 58, 29),
   0 0 0.45em rgb(255, 42, 5);  
  box-shadow: 0 0 0.2em;
`