import React from 'react';
import Projectlist from '../Projectlist';
import styled from 'styled-components';

function Mainpage() {
  return (
    <div id="body">
      <Title>Emil Stjernlöf</Title>
      <Projectlist />
    </div>
  );
}

const Title = styled.h1`
  font-size: 8.5em;
  font-family: 'Fugaz One', sans-serif;
  font-weight: 500;
  text-align: center;
  color: var(--bleach);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--dark); 
`;

export default Mainpage;
