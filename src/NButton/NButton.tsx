import * as React from 'react'
import styled from '../utils/styled-components'

interface NButtonProps {
  clicked: boolean
  disabled: boolean
  onClick(...any: any): any
}

const SNButton = styled.button<NButtonProps>`
  border: none;
  border-radius: 50px;
  background: #dfdbdd;
  box-shadow: ${props => !props.clicked 
    ? `20px 20px 60px #bebabc, 
      -20px -20px 60px #fffcfe`  
    : `inset 20px 20px 60px #bebabc, 
      inset -20px -20px 60px #fffcfe`
  };
  width: 280px;
  height: 280px;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const noop = () => {}

const NButton = (props: NButtonProps) => {
  const [clicked, setClicked] = React.useState(false)
  const [disabled] = React.useState(false)

  const onClick = () => {
    setClicked(!clicked)
    props.onClick
  }

  return (
    <SNButton
      clicked={ clicked }
      disabled={ disabled }
      onClick={!props.disabled ? onClick : noop}
    >
      <div>Galaxy</div>
    </SNButton>
  )
}

export default NButton
