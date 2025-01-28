import React, { useState } from 'react'
import styled, { keyframes } from "styled-components";
import { motion as m } from 'framer-motion';
import PageBody from '../PageBody';
import TransitionScreen from '../TransitionScreen';
import { useTransitionContext } from '../../context/TransitionContext';
import { useCardContext } from '../../context/CardContext';

function MovieApp() {
  const { runTransition } = useTransitionContext();
  const { card } = useCardContext();
  const cardData = card.find(item => item.path === 'movieapp');

  const [isNative, setIsNative] = useState(true)
  const [isBrowser, setIsBrowser] = useState(true)
  const [showSwitch, setShowSwitch] = useState(true)


  return (
    <>
      <PageBody
        title={cardData.title}
        descriptions={cardData.descriptions}
        repos={cardData.repos}
        nativeImages={cardData.images.nativeImage}
        browserImages={cardData.images.browserImage}    
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