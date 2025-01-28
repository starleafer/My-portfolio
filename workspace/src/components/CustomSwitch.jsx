import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CustomSwitch = ({ isActive, onToggle, color }) => {
  return (
    <SwitchContainer onClick={onToggle} color={color}>
      <Label active={!isActive}>Browser</Label>
      <Track color={color}>
        <Thumb
          as={motion.div}
          animate={{ x: isActive ? 30 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          color={color}
        />
      </Track>
      <Label active={isActive}>Native</Label>
    </SwitchContainer>
  );
};

CustomSwitch.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  cursor: pointer;
  padding: 0.5em;
  border-radius: 20px;
  z-index: 100;
  position: absolute;
  top: 2em;
  right: 15vw;
`;

const Track = styled.div`
  width: 60px;
  height: 30px;
  background-color: var(--darker);
  border-radius: 15px;
  padding: 2px;
  position: relative;
  border: 2px solid ${props => props.color};
`;

const Thumb = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${props => props.color};
  border-radius: 13px;
`;

const Label = styled.span`
  color: ${props => props.active ? props.color : 'gray'};
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  transition: color 0.3s ease;
`;

export default CustomSwitch;