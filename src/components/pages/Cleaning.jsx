import React from "react";
import { useCardContext } from "../../context/CardContext";
import TransitionScreen from "../TransitionScreen";
import PageBody from "../PageBody";

function Cleaning() {
  const { card } = useCardContext();
  const cardData = card.find(item => item.path === 'cleaning');

  return (
    <>
      <PageBody
        title={cardData.title}
        descriptions={cardData.descriptions}
        repos={cardData.repos}
        browserImages={cardData.images.browserImage}
        invertedColors={true}
      />
      <TransitionScreen />
    </>
  );
}

export default Cleaning;
