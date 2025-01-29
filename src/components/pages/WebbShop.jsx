import React, { useState } from "react";
import styled from "styled-components";
import PageBody from "../PageBody";
import { useTransitionContext } from "../../context/TransitionContext";
import TransitionScreen from "../TransitionScreen";
import { useCardContext } from "../../context/CardContext";

function WebbShop() {
  const { runTransition } = useTransitionContext();
  const { card } = useCardContext();
  const cardData = card.find((item) => item.path === "webbshop");
  const [isBrowser, setIsBrowser] = useState(true);


  return (
    <>
      <PageBody
        title={cardData.title}
        descriptions={cardData.descriptions}
        browserImages={cardData.images.browserImage}
        repos={cardData.repos}
        isBrowser={isBrowser}
      ></PageBody>
      {runTransition === true ? <TransitionScreen /> : ""}
    </>
  );
}

export default WebbShop;
