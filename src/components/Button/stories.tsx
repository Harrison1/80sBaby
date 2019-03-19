import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const stories = storiesOf('Button', module);

stories
	.add('with text', () => (
		<Button>Hello Galaxy</Button>
	))
	.add('with emoji', () => (
		<Button>🚿 🚿 🐈 🐈</Button>
  ))
  