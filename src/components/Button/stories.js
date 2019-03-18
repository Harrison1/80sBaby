import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button')
	.add('with text', () => (
		<Button>Hello Galaxy</Button>
	))
	.add('with emoji', () => (
		<Button>🚿 🚿 🐈 🐈</Button>
  ))
  