import * as React from 'react'
import styled from '../utils/styled-components'

interface NButtonProps {
  clicked: boolean
  disabled: boolean
  onClick(...any: any): any
}

const SNButton = styled.button<NButtonProps>`
  border: none;
  border-radius: 50%;
  background: #dfdbdd;
  box-shadow: ${props => !props.clicked 
    ? `28px 28px 56px #bebabc, 
      -28px -28px 56px #fffcfe`  
    : `inset 28px 28px 56px #bebabc, 
      inset -28px -28px 56px #fffcfe`
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
