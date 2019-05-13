import * as React from 'react'
import styled from '../utils/styled-components'

interface TitleProps {
  tag?: string
  text: string
}

// use this for text button option
// const animate = keyframes`
//   0% {
//     background-position: 0%
//   }
//   100% {
//     background-position: 400%
//   }
// `

const TDiv = styled.div`
  h1, h2, h3, h4, h5, h6 {
    color: #fff;
    font-size: 5rem;
    background: linear-gradient(to right, #8F2AA3, #F4225A, #42C6FF, #FF0081);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Title = (props: TitleProps) => {
  let tag;
  if(props.tag) {
    switch(props.tag.toLowerCase().trim()) {
      case 'h1':
        tag = <h1>{ props.text }</h1>
        break
      case 'h2':
        tag = <h2>{ props.text }</h2>
        break
      case 'h3':
        tag = <h3>{ props.text }</h3>
        break
      case 'h4':
        tag = <h4>{ props.text }</h4>
        break
      case 'h5':
        tag = <h5>{ props.text }</h5>
        break
      case 'h6':
        tag = <h6>{ props.text }</h6>
        break
      default:
        tag = <h1>{ props.text }</h1>
    }
  } else {
    tag = <h1>{ props.text }</h1>
  }

  return (
    <TDiv>
      { tag }
    </TDiv>
  )
}

export default Title
