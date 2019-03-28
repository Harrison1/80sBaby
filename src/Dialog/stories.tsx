import * as React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Dialog from './Dialog'

const stories = storiesOf('Dialog', module)

stories.addDecorator(withKnobs)

stories.add('Dialog', () => <Dialog />)
