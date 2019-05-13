import * as React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Title from './Title'

const stories = storiesOf('Title', module)

stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Title
      tag='h1'
      text={text('Title Text', 'Outrun Galaxy Retro 80s')} 
    />
  ))
