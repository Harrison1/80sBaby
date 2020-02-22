import * as React from 'react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import NButton from './NButton'

const stories = storiesOf('Neu Button', module)

stories.addDecorator(withKnobs)

const noop = () => {}

stories
  .add('with text', () => (
    <NButton
      clicked={boolean('Clicked', false)}
      disabled={boolean('Disabled', false)}
      onClick={ noop }
    />
  ))
