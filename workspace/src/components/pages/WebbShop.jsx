import React, { useState } from 'react'
import styled from 'styled-components';
import { motion as m } from 'framer-motion';
import PageBody from '../PageBody';

function WebbShop() {
  const [isNative, setIsNative] = useState(false)
  const [isBrowser, setIsBrowser] = useState(true)

  const title = "Sole Soul"

  const PageDescription1 = "This webshop relies on a CRUD (Create, Read, Update, Delete) API, simplifying product management tasks for administrators. With effortless deployment through Railway, the API enables efficient addition, updating, retrieval, and removal of product listings, enhancing overall project scalability and maintenance."

  const browserRepo = "https://github.com/tobionesies/gruppuppgift-webshop-let"


  const browserImages = [
    { id: "1", src: 'webshop/products.png', alt: 'browser search' },
    { id: "2", src: 'webshop/description.png', alt: 'browser pager' },
    { id: "3", src: 'webshop/create.png', alt: 'browser series' },
    { id: "4", src: 'webshop/createdproduct.png', alt: 'browser search' },
    { id: "5", src: 'webshop/admin.png', alt: 'browser pager' },
    { id: "6", src: 'webshop/cart.png', alt: 'browser series' },
    { id: "7", src: 'webshop/checkout.png', alt: 'browser series' },
  ];
  
  return (
    <>
      <Body>
        <PageBody
          title={<PageTitle>{title}</PageTitle>}
          PageDescription1={PageDescription1}
          browserRepo={browserRepo}
          browserImages={browserImages}
          isNative={isNative}
          isBrowser={isBrowser}
        />
      </Body>
    </>
  );
}

const Body = styled(m.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--greenish);
  overflow-y: auto; 
  padding: 0 200px;
  /* border: 1px solid red; */

  @media (max-width: 1024px) {
    gap: 5vh; 
    /* margin: 0 200px 0 0;   */
  }
  
  @media (max-width: 768px) {
    margin: 50px 0 0 0;
    padding: 0;
    justify-content: flex-start;
    align-items: center;
  }
  `;

const PageTitle = styled.h1`
font-size: 5vw;
width: 80%;
align-self: flex-start;
color: bisque;

@media (max-width: 1024px) {
  margin: 1.5vh 0;
}


@media (max-width: 768px) {
  font-size: 1.8em;
}

@media (max-width: 425px) {
  font-size: 1.8em;
}
`

export default WebbShop