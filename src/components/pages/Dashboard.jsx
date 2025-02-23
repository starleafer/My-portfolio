import React from "react";
import TransitionScreen from "../TransitionScreen";
import { useCardContext } from "../../context/CardContext";
import PageBody from "../PageBody";

function Dashboard() {
  const { card } = useCardContext();
  const cardData = card.find((item) => item.path === "dashboard");

  return (
    <>
      <PageBody
        title={cardData.title}
        descriptions={cardData.descriptions}
        repos={cardData.repos}
        browserImages={cardData.images.browserImage}
        isBrowser={true} 
        invertedColors={false} 
        
      />
      <TransitionScreen />
    </>
  );
}

export default Dashboard;
