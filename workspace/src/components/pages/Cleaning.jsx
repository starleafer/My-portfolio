import React, { useState } from 'react';
import styled from "styled-components";
import { useTransitionContext } from '../../context/TransitionContext';
import TransitionScreen from '../TransitionScreen';
import PageBody from '../PageBody';

function Cleaning() {
  const [ isNative, setIsNative ] = useState(false)
  const [ isBrowser, setIsBrowser ] = useState(true)
  const { runTransition } = useTransitionContext();

  const title = "Dust Busters"

  const PageDescription1 = "Embark on a journey with Dust Busters, an exceptional online platform meticulously hosted on Firebase. This website combines innovative front-end design with a robust back-end infrastructure, complemented by CRUD logic.";

  const PageDescription2 = "Envision a React-based front-end that simplifies your experience, whether you're navigating bookings, securely logging in, or leaving insightful reviews. It's akin to having a highly efficient superhero dedicated to cleaning services, right at your fingertips."

  const PageDescription3 = "Benefiting from Firebase's enchanting hosting capabilities, our site operates with unparalleled efficiency. Swift, secure, and poised for action, Dust Busters stands as your premier destination for a dynamic and reliable online experience. Streamlined cleanup, tailored to perfection! 🚀✨"

  const browserRepo = "https://github.com/starleafer/The-movie-app"

  const website = "https://dustbusters-207c6.web.app/";

  const browserImages = [
    { id: "1", src: '/pageimages/dustbusters/1.png', alt: 'browser search' },
    { id: "2", src: '/pageimages/dustbusters/2.png', alt: 'browser pager' },
    { id: "3", src: '/pageimages/dustbusters/dbBook.png', alt: 'browser series' },
    { id: "4", src: '/pageimages/dustbusters/dbLogin.png', alt: 'browser series' },
    { id: "5", src: '/pageimages/dustbusters/dbReviews.png', alt: 'browser series' },
  ];
  
  return (
    <>
        <PageBody
          title={title}
          PageDescription1={PageDescription1}
          PageDescription2={PageDescription2}
          PageDescription3={PageDescription3}
          browserRepo={browserRepo}
          website={website}
          browserImages={browserImages}
          isNative={isNative}
          isBrowser={isBrowser}
          invertedColors
        />
      {
      runTransition === true
      ? <TransitionScreen />
      : ""
    }
    </>
  )
}


export default Cleaning