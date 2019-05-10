import * as React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Dialog from './Dialog'
import Button from '../Button'

const stories = storiesOf('Dialog', module)

stories.addDecorator(withKnobs)

const SimpleDialog = () => {
  const [show, toggleShow] = React.useState(false)

  const toggleDialog = () => {
    toggleShow(!show)
  }
  
  return (
    <>
      <Button
        aria-label='show dialog box'
        fontSize='1rem'
        name='show dialog box'
        onClick={ toggleDialog }
        type='button'
      >
        Show This Sweet Box
      </Button>
      <Dialog 
        display={ show }
        onClick={ toggleDialog }
        slideDown={true}
      >
        <h3>Hello Jello</h3>
        <p>We have a lot more jello</p>
      </Dialog>
    </>
  )
}

stories.add('Dialog', () => <SimpleDialog />)
