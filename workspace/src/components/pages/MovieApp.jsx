import React, { useState } from 'react'
import styled, { keyframes } from "styled-components";
import { motion as m } from 'framer-motion';
import PageBody from '../PageBody';
import TransitionScreen from '../TransitionScreen';
import { useTransitionContext } from '../../context/TransitionContext';

function MovieApp() {
  const [isNative, setIsNative] = useState(true)
  const [isBrowser, setIsBrowser] = useState(true)
  const [showSwitch, setShowSwitch] = useState(true)
  const { runTransition } = useTransitionContext();

  const title = "Movie Night"

  const PageDescription1 = "Welcome to Movie Night, where we've got your movie cravings covered effortlessly with the OMDb API. Dive into a treasure trove of movie details, spanning from classic gems to the latest blockbusters. Get the info on titles, release dates, genres, casts, runtimes, ratings, and more."

  const PageDescription2 = "The magic doesn't stop there! With the power-packed combo of React and React Native, Movie Night ensures a seamless experience across different platforms. Whether you're chilling on the web version (courtesy of React) or enjoying the mobile app (crafted with React Native) on your smartphones and tablets, movie exploration has never been this effortless. Time to let the movie marathon begin! 🎥🍿"

  const nativeRepo = "https://github.com/starleafer/https---github.com-starleafer-Movie-App-Native"

  const browserRepo = "https://github.com/starleafer/The-movie-app"


  const nativeImages = [
    { id: "1", src: '/pageimages/movieapp/login.jpg' },
    { id: "2", src: '/pageimages/movieapp/movielist.jpg' },
    { id: "3", src: '/pageimages/movieapp/movieinfo.jpg' },
    { id: "4", src: '/pageimages/movieapp/search.jpg' },
    { id: "5", src: '/pageimages/movieapp/drawer.jpg' },
    { id: "6", src: '/pageimages/movieapp/mypage.jpg' },
  ];

  const browserImages = [
    { id: "1", src: '/pageimages/movieapp/browserSearch.png', info: "Time for a movie night! Search for your favorite movie!", alt: 'browser search' },
    { id: "2", src: '/pageimages/movieapp/browserPager.png', info: "We have a wide range of movies to choose from!", alt: 'browser pager' },
    { id: "3", src: '/pageimages/movieapp/browserSerier.png', info: "Or is it a series you're looking for? We've got you covered!", alt: 'browser series' },
  ];


  return (
    <>
      <PageBody
        title={title}
        PageDescription1={PageDescription1}
        PageDescription2={PageDescription2}
        nativeRepo={nativeRepo}
        browserRepo={browserRepo}
        nativeImages={nativeImages}
        browserImages={browserImages}
        // isNative={isNative}
        // isBrowser={isBrowser}      
        showSwitch={showSwitch}
      />

      {
        runTransition === true
          ? <TransitionScreen />
          : ""
      }
    </>
  )
}


export default MovieApp