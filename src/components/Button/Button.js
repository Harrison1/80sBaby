import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const gradient = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`

const SButton = styled.button`
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
  padding: 4px;
  &:hover {
    animation: ${gradient} 15s ease infinite;
    will-change: background;
  }
  &:active, 
  &:focus, 
  &:visited {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.3rem rgba(180, 0, 255, 0.35);
  }
  div {
    background: #fff;
    border-radius: 3rem;
    padding: 10px 20px;
  }
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`

const SDiv = styled.div`

`

const Button = props => 
  <SButton
    aria-label={props.ariaLabel}
    autoFocus={props.autoFocus}
    disabled={props.disabled}
    name={props.name}
    onClick={props.onClick}
    type={props.type}
    value={props.value}
    primary={props.primary ? true : false}
    fontSize='10px'
  >
    <div>
      { props.children }
    </div>
  </SButton>

export default Button
