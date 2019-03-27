import * as React from 'react'
import Portal from '../Portal'
import styled from '../utils/styled-components'

const BlackBG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  justify-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
/* from css tricks */
const DBox = styled.div`
  background: #fff;
  border-radius: 1rem;
  display: block;
  
  /* Probably need media queries here */
  /* width: 600px; */
  max-width: 100%;
  
  /* height: 400px; */
  max-height: 100%;
  
  position: fixed;
  
  z-index: 100;
  
  left: 50%;
  top: 50%;
  
  /* Use this for centering if unknown width/height */
  transform: translate(-50%, -50%);
  
  /* If known, negative margins are probably better (less chance of blurry text). */
  /* margin: -200px 0 0 -200px; */
  
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
`

const Dialog = () =>
  <Portal id="dialog-box">
    <BlackBG>
      <DBox>
        Hello Galaxy
      </DBox>
    </BlackBG>
  </Portal>

export default Dialog
