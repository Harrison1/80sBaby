import * as React from 'react'
import styled, { keyframes } from '../utils/styled-components'

interface ButtonProps {
  autoFocus?: boolean
  ariaLabel?: string
  children?: React.ReactNode
  disabled?: boolean
  fontSize?: string
  name?: string
  primary?: boolean
  onClick?: () => void
  type?: string
  value?: string
}

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

const SButton = styled(`button`)<ButtonProps>`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  border: none;
  border-radius: 999rem;
  cursor: pointer;
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  padding: 4px;
  animation: ${gradient} 15s ease infinite;
  animation-play-state: paused;
  &:hover {
    animation-play-state: running;
    will-change: background;
    div {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
    }
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
    border-radius: 999rem;
    padding: 10px 20px;
    transition: background 0.5s ease, color 0.5s ease;
  }
`

const noop = () => {}

const Button = (props: ButtonProps) => (
  <SButton
    ariaLabel={props.ariaLabel ? props.ariaLabel : props.name}
    autoFocus={props.autoFocus}
    disabled={props.disabled}
    name={props.name}
    onClick={!props.disabled ? props.onClick : noop}
    type={props.type}
    value={props.value}
    primary={props.primary ? true : false}
    fontSize={props.fontSize}
  >
    <div>{props.children}</div>
  </SButton>
)

export default Button
