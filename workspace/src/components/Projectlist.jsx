import React, { useState } from 'react';
import styled from 'styled-components'
import Card from './Card';
import { CardProvider, useCardContext } from '../context/CardContext';
import {motion} from 'framer-motion'

function Projectlist({setCursorHoverColor, setIsHoveringCards}) {
    const { card } = useCardContext();

    if (!card) {
        return console.log('Context is undefined');
    }

    const cardVariants = {
        offscreen: {
            x: 100,
            opacity: 0
        },
        onscreen: i => ({
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                delay: i * 0.1
            }
        })
    };

    return (
        <CardProvider>
            <StyledProjectList>
                <ProjectContainer>
                {card.map((item, index) => (
                        <MotionContainer
                            key={item.id}
                            variants={cardVariants}
                            initial="offscreen"
                            animate="onscreen"
                            custom={index} 
                        >
                            <Card
                                key={item.id}
                                id={item.id}
                                path={item.path}
                                title={item.title}
                                label={item.label}
                                color={item.color}
                                backgroundColor={item.backgroundColor}
                                image={item.image}
                                setCursorHoverColor={setCursorHoverColor}
                                setIsHoveringCards={setIsHoveringCards}
                            />
                        </MotionContainer>
                    ))}
                </ProjectContainer>
            </StyledProjectList>
        </CardProvider>
    )
}

const StyledProjectList = styled.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: 90vw;
    }
    `

const ProjectContainer = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1024px) {
        height: 45vh;
;
  }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
  }
`

const MotionContainer = styled(motion.div)`
    display: flex;
    width: 15vw;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `

export default Projectlist