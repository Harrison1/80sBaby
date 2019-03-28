import * as React from 'react'
import Button from './Button'
import * as renderer from 'react-test-renderer'

test('Standard button matches', () => {
  const component = renderer.create(<Button>80s Baby</Button>)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
