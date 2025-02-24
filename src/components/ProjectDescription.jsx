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

  const handleRepoClick = () => {
    if (showViewSwitch) {
      const repo = isSwitchActive 
        ? repos.find(r => r.browser) 
        : repos.find(r => r.native);
        
      if (repo) {
        window.open(isSwitchActive ? repo.browser : repo.native, "_blank");
      }
    } else {
      window.open(Object.values(repos[0])[0], "_blank");
    }
  };

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

      <ButtonGroup showViewSwitch={showViewSwitch}>
        <LinkGroup>
          <LinkInner color={color}>
            <CustomButton
              color={color}
              backgroundColor={backgroundColor}
              small
              onClick={handleRepoClick}
              label={
                <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
                  <IconWrapper>{repos[0].icon}</IconWrapper>           
                </div>
              }
            />
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

  @media (max-width: 1536px) and (min-width: 769px) {
    margin: 0;
    gap: 0.8em;
    margin-top: 2em;
  }

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
    font-size: 1em;
    line-height: 1.5;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 90;
`;

const LinkInner = styled.div`
  display: flex;
  flex-direction: row;
  height: 3em;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5em;
  padding: 1em 0;
  border-radius: 15px;

  @media (max-width: 1536px) and (min-width: 769px) {
    padding: 0.3em;
    margin-top: 0;
    height: 2.5em;
    gap: 1em;
    border-width: 3px;
  }

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
  justify-content: flex-start;
  gap: 2em;
  min-height: 3em;
  /* border: 1px solid red; */

  @media (max-width: 1536px) and (min-width: 768px) {
    width: 35vw;
    margin-top: 5px;
    justify-content: flex-start;
    min-height: 2.5em;
    gap: 1em;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    gap: 1em;
    margin-bottom: 2em;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: translateZ(0);
  will-change: transform;
  max-width: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    gap: 1em;
    font-size: 0.9rem;
  }

  svg {
    width: 2em;
    height: 2em;
    flex-shrink: 0;

    @media (max-width: 768px) and (min-width: 320px) {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;

const SwitchButtonContainer = styled.div`
  z-index: 90;

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
