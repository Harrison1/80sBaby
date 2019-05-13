import * as React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Dialog from './Dialog'
import Button from '../Button'
import Title from '../Title'
import GlobalStyles from '../GlobalStyles'

const stories = storiesOf('Dialog', module)

stories.addDecorator(withKnobs)

const SimpleDialog = () => {
  const [show, toggleShow] = React.useState(false)

  const toggleDialog = () => {
    toggleShow(!show)
  }
  
  return (
    <>
      <GlobalStyles />
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
        <Title tag='h3' text='Hello Jello' />
        <p>We have a lot more jello</p>
      </Dialog>
    </>
  )
}

stories.add('Dialog', () => <SimpleDialog />)
