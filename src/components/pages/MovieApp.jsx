import React from 'react'
import PageBody from '../PageBody';
import TransitionScreen from '../TransitionScreen';
import { useTransitionContext } from '../../context/TransitionContext';
import { useCardContext } from '../../context/CardContext';

function MovieApp() {
  const { runTransition } = useTransitionContext();
  const { card } = useCardContext();
  const cardData = card.find(item => item.path === 'movieapp');

  return (
    <>
      <PageBody
        title={cardData.title}
        descriptions={cardData.descriptions}
        repos={cardData.repos}
        nativeImages={cardData.images.nativeImage}
        browserImages={cardData.images.browserImage}    
        isNative
        isBrowser
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