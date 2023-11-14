import React from 'react';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';

function WebbShop() {

  
  return (
      <Body
        // className='AppContainer'
        // initial={{ y: "100%" }}
        // animate={{ y: "0%" }}
        // transition={{ duration: 0.75, ease: "easeOut" }}
        // exit={{ opacity: 1 }}
      >
        
      </Body>
  );
}

const Body = styled(m.div)`
  background-color: var(--greenish);
  height: 100vh;
  width: 100%
`
export default WebbShop