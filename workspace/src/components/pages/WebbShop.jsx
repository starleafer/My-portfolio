import React, { useState } from 'react'
import styled from 'styled-components';
import { motion as m } from 'framer-motion';
import PageBody from '../PageBody';
import { useTransitionContext } from '../../context/TransitionContext';
import TransitionScreen from '../TransitionScreen';

function WebbShop() {
  const [isNative, setIsNative] = useState(false)
  const [isBrowser, setIsBrowser] = useState(true)
  const { runTransition } = useTransitionContext();

  const title = "Sole Soul"

  const PageDescription1 = `Greetings, shoe enthusiasts! Step into Sole Soul, where our dynamic webshop, built on the powerful CRUD (Create, Read, Update, Delete) API, transforms the admin and customer experience. This React-based app, fueled by Railway's magic, smoothly empowers our webshop, ensuring effortless product management. Welcome to a new era of streamlined and efficient online shopping!`

  const PageDescription2 = `Adding new styles, updating our collection, retrieving your favorite picks, and removing items—all done seamlessly. It's like having a reliable assistant for our admins, boosting the project's scalability and making maintenance a walk in the park. At Sole Soul, we're all about making your shoe-shopping journey simple and stylish! 🌟👞`

  const browserRepo = "https://github.com/tobionesies/gruppuppgift-webshop-let"


  const browserImages = [
    { id: "1", src: '/pageimages/webbshop/products.png', alt: 'browser search' },
    { id: "2", src: '/pageimages/webbshop/description.png', alt: 'browser pager' },
    { id: "3", src: '/pageimages/webbshop/create.png', alt: 'browser series' },
    { id: "4", src: '/pageimages/webbshop/createdproduct.png', alt: 'browser search' },
    { id: "5", src: '/pageimages/webbshop/admin.png', alt: 'browser pager' },
    { id: "6", src: '/pageimages/webbshop/cart.png', alt: 'browser series' },
    { id: "7", src: '/pageimages/webbshop/checkout.png', alt: 'browser series' },
  ];
  
  return (
    <>
      <Body>
        <PageBody
          title={<PageTitle>{title}</PageTitle>}
          PageDescription1={PageDescription1}
          PageDescription2={PageDescription2}
          browserRepo={browserRepo}
          browserImages={browserImages}
          isNative={isNative}
          isBrowser={isBrowser}
        />
      </Body>
      {
      runTransition === true
      ? <TransitionScreen />
      : ""
    }
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
color: var(--bisque);

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