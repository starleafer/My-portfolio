import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSwitch = styled('div')(({ color, backgroundColor, isSwitchActive }) => ({
    position: 'relative',
    display: 'inline-block',
    width: 42,
    height: 26,
    color: color || 'green',
    backgroundColor: backgroundColor || 'lightgray',
    border: `1px solid ${color}`,
    borderRadius: 26 / 2,
    transition: 'background-color 0.3s',
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 22,
        height: 20,
        left: 2,
        bottom: 2,
        border: `1px solid ${color}`,
        backgroundColor: (isSwitchActive ? backgroundColor : color) || 'lightgray',
        borderRadius: '50%',
        transition: 'transform 0.3s',
    },
    '&.active': {
        backgroundColor: color || 'green',
        color: backgroundColor || 'lightgray',
        '&:before': {
            transform: 'translateX(16px)',
        },
    },
}));

const Switch = ({ color, shadowColor, backgroundColor, isSwitchActive, setIsSwitchActive, ...props }) => {

    const handleClick = () => {
        setIsSwitchActive(!isSwitchActive);
    };

    return (
        <Container>
            <StyledSwitch
                isSwitchActive={isSwitchActive}
                className={isSwitchActive ? 'active' : ''}
                color={color}
                shadowColor={shadowColor}
                backgroundColor={backgroundColor}
                onClick={handleClick}
                {...props}
            >
            </StyledSwitch>
            <Label onClick={handleClick}>
            {isSwitchActive ? 'Native' : 'Browser'}
            </Label>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 18em;
`

const Label = styled.label`
    font-size: 2.5em;
    font-weight: 600;
    margin-right: 10px;
`

export default Switch;