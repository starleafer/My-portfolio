import React, { useState } from 'react'
import PageBody from '../PageBody';
import TransitionScreen from '../TransitionScreen';
import { useCardContext } from '../../context/CardContext';

function ChatApp() {
  const { card } = useCardContext();
  const cardData = card.find(item => item.path === 'chatapp');

  const [isNative, setIsNative] = useState(true)
  const [isBrowser, setIsBrowser] = useState(false)

  return (
    <>
      <PageBody
        title={cardData.title}
        descriptions={cardData.descriptions}
        repos={cardData.repos}
        nativeImages={cardData.images.nativeImage}
        isNative={isNative}
        isBrowser={isBrowser}
        previousPage
        nextPage
      />
      <TransitionScreen />
    </>
  )
}


export default ChatApp