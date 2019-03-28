import * as React from 'react'
import Button from './Button'
import * as renderer from 'react-test-renderer'

test('Button changes the class when hovered', () => {
  const component = renderer.create(<Button>80s Baby</Button>)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
