import React from 'react';
import Projectlist from '../Projectlist';
import styled from 'styled-components';

function Mainpage() {
  return (
    <Container>
      <TitlesContainer>
        <Title>Emil Stjernlöf</Title> 
        <SmallTitle>/ Front end developer in development</SmallTitle>
      </TitlesContainer>
      <Projectlist />
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 3vw;;
`
const TitlesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 8vw;
  font-weight: 500;
  text-align: center;
  margin: 0.5em 0.2em 0.5em 0;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--dark); 
`;

const SmallTitle = styled.h2`
  font-size: 1.6vw;
  font-weight: 500;
  margin: 3em 0 0 0;
  color: #bbbbbb;
  -webkit-text-stroke-width: 1px;
  /* -webkit-text-stroke-color: var(--dark);  */
`

export default Mainpage;
