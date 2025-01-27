import React, { useState } from 'react'
import styled from 'styled-components';
import PageBody from '../PageBody';
import { useTransitionContext } from '../../context/TransitionContext';
import TransitionScreen from '../TransitionScreen';

function WebbShop() {
  // const [nativeAndBrowser, setNativeAndBrowser] = useState(false)
  const [isBrowser, setIsBrowser] = useState(true)
  const { runTransition } = useTransitionContext();

  const title = "Sole Soul"

  const PageDescription1 = `Greetings, shoe enthusiasts! Step into Sole Soul, where our dynamic webshop, built on the powerful CRUD (Create, Read, Update, Delete) API, transforms the admin and customer experience. This React-based app, fueled by Railway's magic, smoothly empowers our webshop, ensuring effortless product management. Welcome to a new era of streamlined and efficient online shopping!`

  const PageDescription2 = `Adding new styles, updating our collection, retrieving your favorite picks, and removing items—all done seamlessly. It's like having a reliable assistant for our admins, boosting the project's scalability and making maintenance a walk in the park. At Sole Soul, we're all about making your shoe-shopping journey simple and stylish! 🌟👞`

  const browserRepo = "https://github.com/tobionesies/gruppuppgift-webshop-let"


  const browserImages = [
    { id: "1", src: '/pageimages/webbshop/products.png', info: "Have a look at our products!", alt: 'browser search' },
    { id: "2", src: '/pageimages/webbshop/description.png', info: "And feel free to read more about them!", alt: 'browser pager' },
    { id: "3", src: '/pageimages/webbshop/cart.png', info: "Did you find something you like? Great! Add it to your cart!", alt: 'browser series' },
    { id: "4", src: '/pageimages/webbshop/create.png', info: "Are you an admin? Cool! You can create new products here!", alt: 'browser series' },
    { id: "5", src: '/pageimages/webbshop/admin.png', info: "And you can also manage your products here!", alt: 'browser pager' },
  ];
  
  return (
    <>
        <PageBody
          title={title}
          PageDescription1={PageDescription1}
          PageDescription2={PageDescription2}
          browserRepo={browserRepo}
          browserImages={browserImages}
          // isNative={isNative}
          isBrowser={isBrowser}
        >
        </PageBody>
      {
      runTransition === true
      ? <TransitionScreen />
      : ""
    }
    </>
  );
}

export default WebbShop