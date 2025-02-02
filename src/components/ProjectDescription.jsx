import React from "react";
import styled, { keyframes } from "styled-components";
import CustomButton from "./CustomButton";
import PropTypes from "prop-types";

ProjectDescription.propTypes = {
  descriptions: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string,
    quaternary: PropTypes.string,
  }).isRequired,
  repos: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  showViewSwitch: PropTypes.bool.isRequired,
  onSwitchView: PropTypes.func.isRequired,
  isSwitchActive: PropTypes.bool.isRequired,
};

function ProjectDescription({
  descriptions,
  repos,
  color,
  backgroundColor,
  showViewSwitch,
  onSwitchView,
  isSwitchActive,
}) {
  return (
    <DescriptionContainer>
      {descriptions.primary && (
        <Description>
          {descriptions.primary.charAt(0) && (
            <span style={{ fontSize: "1.25em", fontWeight: "bold" }}>
              {descriptions.primary.charAt(0)}
            </span>
          )}
          {descriptions.primary.slice(1)}
        </Description>
      )}
      {descriptions.secondary && (
        <Description>{descriptions.secondary}</Description>
      )}
      {descriptions.tertiary && (
        <Description>{descriptions.tertiary}</Description>
      )}
      <br />

      <ButtonGroup showViewSwitch={showViewSwitch}>
        <LinkGroup>
          <LinkInner color={color}>
            {repos.map((repo, index) => (
              <CustomButton
                key={index}
                color={color}
                backgroundColor={backgroundColor}
                onClick={() => window.open(Object.values(repo)[0], "_blank")}
                label={
                  <>
                    {repo.icon}
                    {Object.keys(repo)[0] === "browser" && "Browser code"}
                    {Object.keys(repo)[0] === "native" && "Native code"}
                    {Object.keys(repo)[0] === "website" && "Website"}
                  </>
                }
              />
            ))}
          </LinkInner>
        </LinkGroup>
        {showViewSwitch && (
          <SwitchButtonContainer>
            <ViewSwitchButton>
              <CustomButton
                onClick={onSwitchView}
                color={color}
                border
                pulse
                backgroundColor={backgroundColor}
                label={isSwitchActive ? "Show Native" : "Show Browser"}
                invertedColors={true}
                showViewSwitch={showViewSwitch}
              />
            </ViewSwitchButton>
          </SwitchButtonContainer>
        )}
      </ButtonGroup>
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1em;
  margin: 2em 0;
  width: 30vw;

  @media (max-width: 768px) and (min-width: 320px) {
    align-items: center;
    justify-content: center;
    margin: 0 3em;
    width: 75vw;
  }
`;

const Description = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.1em;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 1536px) and (min-width: 769px) {
    font-size: 1.2vw;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 1em;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 90;
`;

const LinkInner = styled.div`
  display: flex;
  flex-direction: row;
  height: 3em;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  padding: 1em;
  border-radius: 15px;
  border: 4px dotted ${(props) => props.color};

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 1em;
    padding: 1em;
    border: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.showViewSwitch ? "center" : "flex-start"};
  gap: 2em;
  min-height: 3em;

  @media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    gap: 1em;
    margin-bottom: 2em;
  }
`;

const SwitchButtonContainer = styled.div`

  @media (max-width: 768px) and (min-width: 320px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 90;
    height: 3em;
    width: 100%;
  }
`;

const ViewSwitchButton = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 90;
  height: 3em;
  min-width: 160px;

  & > button {
    width: 100%;
    min-width: 160px;
    height: 100%;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
    min-width: 20%;
    justify-content: center;
    font-size: 0.8em;
  }
`;

export default ProjectDescription;
