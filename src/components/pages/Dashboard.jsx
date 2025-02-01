import React from "react";
import styled from "styled-components";
import { motion as m } from "framer-motion";
import PageNavigationButton from "../PageNavigationButton";
import TransitionScreen from "../TransitionScreen";
import { useTransitionContext } from "../../context/TransitionContext";
import { useCardContext } from "../../context/CardContext";

function Dashboard() {
  const { runTransition } = useTransitionContext();

  return (
    <>
      <Body>
        <Content>
          <Title>Daily Helper</Title>
          <Text>
            Daily Helper is a web application that helps you manage your daily
            tasks and schedule, view weather forecast and more. It is built with
            React, <Bold>Typescript</Bold> and <Bold>Next.js</Bold>.
          </Text>
          <Message>
            Currently under development. Please check back soon!
          </Message>
          <NavigationContainer>
            <PageNavigationButton />
          </NavigationContainer>
        </Content>
      </Body>
      {runTransition === true ? <TransitionScreen /> : ""}
    </>
  );
}

const Body = styled(m.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--shadow-blueish);
  height: 100vh;
  width: 100%;
  font-family: "Poppins", sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;

  @media (max-width: 768px) and (min-width: 321px) {
    width: 70vw;
    height: auto;
    min-height: 100vh;
    position: relative;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 4em;
  width: 90vw;
`;

const Title = styled.h1`
  color: var(--silver-light);
`;

const Text = styled.p`
  color: var(--silver-light);
`;

const Message = styled.h3`
  color: var(--yellowish);
  text-decoration: underline;
`;

const Bold = styled.b`
  color: var(--yellowish);
`;

export default Dashboard;
