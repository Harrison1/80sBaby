import * as React from 'react'
import Portal from '../Portal'
import styled, { keyframes } from '../utils/styled-components'

interface DialogProps {
  aClass?: boolean
  children?: React.ReactNode
  display?: boolean
  hide?: boolean
  onClick?: () => void
  slideDown?: boolean
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

// const slideUp = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(20%);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0%);
//   }
// `

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`

const BlackBG = styled(`div`)<DialogProps>`
  align-items: center;
  background: rgba(144, 9, 108, 0.5);
  display: ${props => props.hide ? 'none' : 'grid'};
  justify-content: center;
  justify-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.aClass ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  animation: ${fadeIn} 0.25s ease-in-out;
`

/* from css tricks */
const DBox = styled(`div`)<DialogProps>`
  background: #fff;
  border-radius: 1rem;
  display: block;
  height: fit-content;
  padding: 1rem;

  /* Probably need media queries here */
  /* width: 600px; */
  max-width: 100%;

  /* height: 400px; */
  max-height: 100%;

  /* position: fixed; */

  z-index: 100;

  /* left: 50%;
  top: 50%; */

  /* Use this for centering if unknown width/height */
  /* transform: translate(-50%, -50%); */

  /* If known, negative margins are probably better (less chance of blurry text). */
  /* margin: -200px 0 0 -200px; */

  // box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 0px 6px rgba(0, 0, 0, 0.3);
  opacity: ${props => props.aClass ? 1 : 0};
  transform: ${props => props.aClass ? 'translateY(0%)' : 'translateY(-20%)'};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  animation: ${slideDown} 0.5s ease-in-out;
`

const Dialog = (props: DialogProps) => {
  const [show, setShow] = React.useState(false)
  const [firstRender, setFirstRender] = React.useState(false)
  const [aClass, setAClass] = React.useState(false)
  const [canClick, setCanClick] = React.useState(false)
  const [hide, setHide] = React.useState(true)

  const toggleDialog = () => {
    if(canClick && props.onClick) {
      if(!firstRender) {
        setFirstRender(true)
      }
      props.onClick()
    }
  }

  const displayDialog = () => {
    setAClass(true)
    setCanClick(true)    
    setHide(false)
  }

  
  const hideDialog = () => {
    setAClass(false)
    setCanClick(false)
    setTimeout(() => {
      setHide(true)
    }, 500)
  }

  React.useEffect(() => {
    if(props.display && !firstRender) {
      setShow(true)
    }

    if(firstRender) {
      if(props.display) {
        displayDialog()
      } else {
        hideDialog()
      }
    } else {
      displayDialog()
    }
  })

  return (
    show
      ? <Portal id="dialog-box">
          <BlackBG
            onClick={ toggleDialog }
            aClass={ aClass }
            hide={ hide }
          >
            <DBox 
              slideDown={ props.slideDown }
              aClass={ aClass }
            >
              {props.children}
            </DBox>
          </BlackBG>
        </Portal>
      : null
  )
}

export default Dialog
