import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import PropTypes from 'prop-types';

ProjectDescription.propTypes = {
    descriptions: PropTypes.shape({
      primary: PropTypes.string,
      secondary: PropTypes.string,
      tertiary: PropTypes.string,
      quaternary: PropTypes.string
    }).isRequired,
    repos: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
  };  

function ProjectDescription({ descriptions, repos, color, backgroundColor }) {
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
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin: 2em 0;
  width: 50vw;
`;

const Description = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.1em;
  line-height: 1.6;
  margin: 0;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 100;
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
`;

export default ProjectDescription;
