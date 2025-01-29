import React, { useState } from 'react';
import styled from 'styled-components';
import ImageGallerySlider from './ImageGallerySlider';

const UsersList = ({ browserImages, color, backgroundColor, shadowColor }) => (
    <ContentContainer>
        <ImageGallerySlider
            images={browserImages}
            color={color}
            backgroundColor={backgroundColor}
            shadowColor={shadowColor}
        />
    </ContentContainer>
);

const SettingsPanel = ({ nativeImages, color, backgroundColor, shadowColor }) => (
    <ContentContainer>
        <ImageGallerySlider
            isNative
            images={nativeImages}
            color={color}
            backgroundColor={backgroundColor}
            shadowColor={shadowColor}
        />
    </ContentContainer>
);

const TabbedFolder = ({ browserImages, nativeImages, color, backgroundColor, shadowColor }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'Browser',
            content:
                <UsersList
                    browserImages={browserImages}
                    color={color}
                    backgroundColor={backgroundColor}
                    shadowColor={shadowColor}
                />
        },
        {
            title: 'Native',
            content:
                <SettingsPanel
                    nativeImages={nativeImages}
                    color={color}
                    backgroundColor={backgroundColor}
                    shadowColor={shadowColor}
                />
        }
    ];

    return (
        <TabbedFolderContainer>
            <TabHeaderContainer color={color}>
                {tabs.map((tab, index) => (
                    <TabButton
                        key={index}
                        onClick={() => setActiveTab(index)}
                        isActive={activeTab === index}
                        color={color}
                        backgroundColor={backgroundColor}
                        shadowColor={shadowColor}
                    >
                        {tab.title}
                    </TabButton>
                ))}
            </TabHeaderContainer>

            <TabContent color={color}>
                {tabs[activeTab].content}

            </TabContent>
        </TabbedFolderContainer>
    );
};

const TabbedFolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const TabHeaderContainer = styled.div`
  display: flex;
  
  border-bottom: 1px solid ${(props) => props.color};
`;

const TabButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  ${({ isActive, color, backgroundColor, shadowColor }) => isActive ? `
    background-color: ${color};
    color: ${backgroundColor};
    border: 1px ;
    border-bottom: none;
  ` : `
    background-color: transparent;
    color: ${color};
    border: 1px solid ${color};
    
    &:hover {
      background-color: ${shadowColor};
    }
  `}
`;

const TabContent = styled.div`
  background-color: transparent;
  border: 1px solid ${(props) => props.color};
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;



export default TabbedFolder;