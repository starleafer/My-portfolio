import React, { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import { motion as m } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
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
          title={<PageTitle>{title}</PageTitle>}
          PageDescription1={PageDescription1}
          PageDescription2={PageDescription2}
          PageDescription3={PageDescription3}
          browserRepo={browserRepo}
          website={website}
          browserImages={browserImages}
          isNative={isNative}
          isBrowser={isBrowser}
        />
      {
      runTransition === true
      ? <TransitionScreen />
      : ""
    }
    </>
  )
}

const fadein = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;


const PageTitle = styled.h1`
font-size: 5vw;
align-self: flex-start;
/* color: var(--redish); */

@media (max-width: 1024px) {
  margin: 1.5vh 0;
}

@media (max-width: 965px) {
  font-size: 2.5vw;
}

@media (max-width: 768px) {
  font-size: 1.8em;
}

@media (max-width: 425px) {
  font-size: 1.8em;
}
`

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 70px;
//   margin-left: 50px;
//   margin-top: 50px;
//   animation: ${fadein} 0.8s forwards;

//   @media (max-width: 768px) {
//       margin-left: 0;
//       gap: 20px;
//   }
// `

// const InfoContainer = styled.article`
//   display: flex;
//   align-items: flex-end;
//   width: 70vw;
//   gap: 10vw;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 0;

//   }
//   `

// const Info = styled.section`
//   display: flex;
//   flex-direction: column;
//   text-align: left;
//   width: 100%;
//   font-size: 1.3em;
//   font-weight: 600;

// `

// const PageTitle = styled.h1`
// font-size: 3.6rem;

// @media (max-width: 768px) {
//     font-size: 1.6rem;
//     margin: 25px 0 0 0 ;
//   }
// `

// const PageDescription = styled.h3`
//   font-family: Roboto Flex;
//   font-weight: 500;

//   @media (max-width: 768px) {
//     font-size: 0.8rem;
//   }
// `

// const Links = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
//   align-items: flex-start;
//   width: 100%;
//   gap: 1vw;

//   @media (max-width: 768px) {
//     flex-direction: row;
//     width: 70vw;
//     font-size: 0.4rem;
//     margin-top: 1rem;
//     /* justify-content: space-evenly; */
//     align-items: center;

//     :last-child {

//     @media (max-width: 768px) {
//       margin: 0;
//       margin-left: auto;
//   }
//   }
// }

// @media (max-width: 375px) {  
    
// }
// `

// const InfoLinks = styled.div`
//   display: flex;
//   position: relative; 
//   align-items: center;
//   justify-content: center;
//   font-family: 'Roboto Flex';
//   gap: 5px;
//   font-size: 1.5em;
//   color: var(--dark);
//   background-color: var(--yellowish);
//   border-radius: 10px;
//   overflow: hidden;

//   &:hover {
//     color: #fff;
//   }
  
// `

// const ImageContainer = styled.div`
//   display: flex;
//   margin-bottom: 3vh;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   width: 75vw;
// `

// const Image = styled.img`
//   width: 100%;
//   border-radius: 10px;
// `

export default Cleaning