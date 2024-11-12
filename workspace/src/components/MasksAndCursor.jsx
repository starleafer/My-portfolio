import React, { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import styled, { keyframes } from 'styled-components';
import useMousePosition from '../utils/useMousePosition';

const MasksAndCursor = ({ isHoverButton, isHoveringCards, cursorColor, cursorHoverColor, }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const { x, y } = useMousePosition();

    let size;
    switch (true) {
        case isHoveringCards:
            size = 80;
            break;
        case isMouseDown:
            size = 15;
            break;
        case isHoverButton:
            size = 40;
            break;
        case isHovered:
            size = 130;
            break;
        default:
            size = 35;
    }

    const offsetX = isMouseDown ? -8 : !isHovered ? -22 : -60;
    const offsetY = isMouseDown ? -8 : !isHovered ? -22 : -60;

    const secretMessage = "Frontend developer in development";

    useEffect(() => {
        const handleMouseDown = () => setIsMouseDown(true);
        const handleMouseUp = () => setIsMouseDown(false);

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            <MaskedGroup>
                <MaskedSecret
                    animate={{
                        WebkitMaskPosition: `${x - size - offsetX}px ${y - size - offsetY}px`,
                        WebkitMaskSize: `${size}px`,
                        backgroundColor: isHoveringCards && isMouseDown ? cursorHoverColor : isHoveringCards ? cursorHoverColor : cursorColor,
                    }}
                    transition={{
                        type: 'tween',
                        ease: 'backOut',
                        duration: 0.2,
                        x: { type: 'tween', ease: 'backOut', duration: 0.2 },
                        y: { type: 'tween', ease: 'backOut', duration: 0.2 },
                        width: { type: 'tween', ease: 'backOut', duration: 0.4 },
                        height: { type: 'tween', ease: 'backOut', duration: 0.4 },
                    }}
                    style={{ paddingRight: '4em', paddingTop: '8em' }}
                >
                    {location.pathname === '/' && (
                        <Message
                            onMouseEnter={() => { setIsHovered(true) }}
                            onMouseLeave={() => { setIsHovered(false) }}
                            style={{ margin: '0' }}
                        >
                            {secretMessage}
                        </Message>
                    )}
                </MaskedSecret>
                <Secret></Secret>
            </MaskedGroup>
        </>
    )
}

const MaskedGroup = styled.div`
    position: absolute;
    justify-content: flex-end;
    align-items: start;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    pointer-events: none; 
`

const Secret = styled.div`
    position: absolute;
    font-size: 1.8em;
    font-weight: 600;
    width: 100vw;
    height: 100vh;    
`;

const MaskedSecret = styled(m.div)`
    font-size: 1.8em;
    font-weight: 600;
    mask-image: url('../../../public/mask.svg');
    mask-repeat: no-repeat;
    mask-size: 40px;
    background: var(--dark);
    color: white;
    display: flex;
    align-items: start;
    justify-content: end;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
`;

const Message = styled.h4`
  width: 20em;
  pointer-events: auto; 

 `

export default MasksAndCursor