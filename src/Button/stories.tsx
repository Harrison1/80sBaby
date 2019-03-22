import * as React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import Portal from '../Portal'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories
	.add('with text', () => (
		<Portal id="dialog-box">
			<Button
				aria-label={text('Aria Label', 'My Button')}
				autoFocus={boolean('Auto Focus', false)}
				disabled={boolean('Disabled', false)}
				fontSize={text('Font Size', '1rem')}
				name={text('Name', 'Galaxy')}
				type={text('Type', 'button')}
				value={text('Value', '1')}
			>
				{text('Button Text', 'Hello Galaxy')}
			</Button>
		</Portal>
	))
	.add('with emoji', () => (
		<Button>🚿 🚿 🐈 🐈</Button>
  ))
  