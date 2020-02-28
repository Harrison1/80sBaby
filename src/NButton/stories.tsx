import * as React from 'react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import NButton from './NButton'

const stories = storiesOf('Neu Button', module)

stories.addDecorator(withKnobs)

const noop = () => {}

const NeuButton = () => {
  return (
    <div style={{ background: '#dfdbdd', height: '500px', padding: '50px', borderRadius: '10px' }}>
      <NButton
        clicked={boolean('Clicked', false)}
        disabled={boolean('Disabled', false)}
        onClick={ noop }
      />
    </div>
  )
}

stories.add('with text', () => <NeuButton />)
